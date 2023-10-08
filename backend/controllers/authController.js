const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { EmailForm } = require("../utils/email-form");
const catchAsync = require("../utils/catchAsync");

const signTokens = (user, id) => {
  const refreshToken = jwt.sign({ user, id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  });
  const accessToken = jwt.sign({ user, id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return { accessToken, refreshToken };
};

exports.signup = catchAsync(async (req, res) => {
  const existingUser = await User.findOne({
    email: req.body.email.toLowerCase(),
  });

  if (existingUser) {
    throw new AppError("Email already in use", 409, "errors.email_in_use");
  }

  const existingUsernameUser = await User.findOne({
    username: req.body.username.toLowerCase(),
  });

  if (existingUsernameUser) {
    throw new AppError(
      "Username already in use",
      409,
      "errors.username_in_use"
    );
  }

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

  const initials = req.body.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  const newUser = new User({
    name: req.body.name,
    email: req.body.email.toLowerCase(),
    username: req.body.username.toLowerCase(),
    avatar: `https://api.dicebear.com/5.x/initials/svg?seed=${initials}`,
    password: hashedPassword,
  });

  await newUser.save();

  const tokens = signTokens(newUser, newUser._id);

  res.cookie("rt", tokens.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.status(201).json({
    ...tokens,
    status: "success",
  });
});

exports.signin = catchAsync(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new AppError(
      "Invalid email or password",
      401,
      "errors.invalid_credentials"
    );
  }

  const tokens = signTokens(user, user._id);

  res.cookie("rt", tokens.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });
  res.cookie("auth", true, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
  });
  res.status(200).json({
    ...tokens,
    status: "success",
  });
});

exports.signout = (req, res) => {
  res.clearCookie("rt");
  res.clearCookie("auth");

  res.status(200).json({
    status: "success",
    message: "Logged out",
  });
};

exports.googleAuthCallback = catchAsync(async (req, res) => {
  const tokens = signTokens(req.user, req.user._id);

  await User.updateOne({ _id: req.user._id });

  res.cookie("auth", true, {
    httpOnly: false,
    secure: true,
    sameSite: "none",
  });

  res.cookie("rt", tokens.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 3600,
  });

  res.redirect(`${process.env.CLIENT_URL}`);
});

exports.refreshToken = catchAsync(async (req, res) => {
  const refreshToken = req.cookies.rt || req.body.token;

  if (!refreshToken) {
    throw new AppError("User is not authorized", 401, "errors.unauthorized");
  }

  const decoded = await promisify(jwt.verify)(
    refreshToken,
    process.env.JWT_REFRESH_SECRET
  );

  if (!decoded || !decoded.id) {
    throw new AppError("User is not authorized", 401, "errors.unauthorized");
  }

  const user = await User.findById(decoded.id);

  if (!user) {
    throw new AppError("User not found", 404, "errors.not_found");
  }

  const tokens = signTokens(user, user._id);

  res.cookie("rt", tokens.refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
  });

  res.status(200).json({ status: "success", ...tokens });
});

exports.protect = catchAsync(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token && req.cookies.accessToken) {
    token = req.cookies.accessToken;
  }

  if (!token) {
    throw new AppError("User is not authorized", 401, "errors.unauthorized");
  }

  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);

  if (!user) {
    throw new AppError("User is not authorized", 401, "errors.unauthorized");
  }

  req.user = user;

  next();
});

exports.forgotPassword = catchAsync(async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw new AppError("Email Address Not Found", 401, "errors.invalid_email");
  }

  const tokens = signTokens(user, user._id);

  const urlPart = tokens.accessToken;
  const encodedToken = btoa(urlPart);
  const resetLink = `${process.env.CLIENT_URL}/recovery-password/${encodedToken}`;

  const emailContent = EmailForm(user.name, resetLink);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: '"Pchat ✨" papunidze07@gmail.com',
    to: email,
    subject: "Password Reset",
    html: emailContent,
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({
    message: "Password reset instructions sent to your email.",
    token: encodedToken,
  });
});

exports.recoveryForgotPassword = catchAsync(async (req, res) => {
  const { token, password } = req.body;

  const decodedToken = atob(token);
  const decoded = await promisify(jwt.verify)(
    decodedToken,
    process.env.JWT_SECRET
  );
  const user = await User.findById(decoded.id).select("+password");

  if (!user) {
    throw new AppError("User not found", 401, "errors.user_not_found");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await user.updateOne({ password: hashedPassword });

  res.status(200).json({
    status: "success",
    message: "Password updated successfully",
  });
});
