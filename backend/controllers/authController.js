const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const User = require("../models/userModels");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const { EmailForm } = require("../utils/email-form");

const signTokens = (user, id) => {
  const refreshToken = jwt.sign({ user, id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  });
  const accessToken = jwt.sign({ user, id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return { accessToken, refreshToken };
};

exports.signup = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });

    if (existingUser) {
      new AppError(res, "Email already in use", 409, "errors.email_in_use");
    }

    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const initials = req.body.name
      .split(" ")
      .map((n) => n[0])
      .join("");

    const userData = {
      ...req.body,
      avatar: `https://api.dicebear.com/5.x/initials/svg?seed=${initials}`,
      password: hashedPassword,
    };

    const newUser = await User.create(userData);

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
  } catch (err) {
    new AppError(res, err.message, 400);
  }
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return new AppError(
        res,
        `User with email ${email} not found. Please check the provided email address.`,
        404
      );
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!user || !user.password || !isPasswordCorrect) {
      return new AppError(
        res,
        "We couldn’t find an account matching the email And password you entered. Please check your email and password and try again",
        401,
        "error.user_not_found"
      );
    }

    const tokens = signTokens(user, user._id);
    console.log(`adminController::login ${email} logged in`);
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
  } catch (err) {
    new AppError(res, err.message, 400);
  }
};

exports.signout = async (req, res, next) => {
  try {
    res.clearCookie("rt");
    res.clearCookie("auth");
    res.status(200).json({
      status: "success",
      message: "Logged out",
    });
  } catch (error) {
    new AppError(res, err.message, 400);
  }
};

exports.googleAuthCallback = async (req, res, next) => {
  try {
    const tokens = signTokens(req.user, req.user._id);
    await User.updateOne({ _id: req.user._id });
    console.log(
      `adminController::googleAuthCallback ${req.user.email} logged in`
    );
    res.cookie("rt", tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 3600,
    });
    res.redirect(`${process.env.CLIENT_URL}`);
  } catch (err) {
    new AppError(res, err.message, 400);
  }
};
exports.refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.rt || req.body.token;

    if (!refreshToken) {
      console.log("adminController::refreshToken User has no refresh token");
      new AppError("User is not authorized", 401, "errors.unauthorized");
    }

    const decoded = await promisify(jwt.verify)(
      refreshToken,
      process.env.JWT_REFRESH_SECRET
    );

    if (!decoded || !decoded.id) {
      console.log("adminController::refreshToken Can't decode refresh token");
      new AppError("User is not authorized", 401, "errors.unauthorized");
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      console.log("adminController::refreshToken User not found");
      new AppError("User not found", 404, "errors.not_found");
    }

    const tokens = signTokens(user, user._id);
    res.cookie("rt", tokens.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(200).json({ status: "success", ...tokens });
  } catch (error) {
    new AppError("User is not authorized", 401, "errors.unauthorized");
  }
};

exports.protect = async (req, res, next) => {
  try {
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
      console.log(
        "adminController::protect User has no auth header or auth header is malformed"
      );
      new AppError("User is not authorized", 401, "errors.unauthorized");
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      console.log(
        "adminController::protect Can't find the user associated with the token"
      );
      new AppError("User is not authorized", 401, "errors.unauthorized");
    }

    req.user = user;

    next();
  } catch (err) {
    console.log(err.message);
    new AppError("User is not authorized", 401, "errors.unauthorized");
  }
};

exports.forgotPassword = async (req, res, next) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      new AppError("Email Address Not Found", 401, "errors.invalid_email");
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

    transporter
      .sendMail(mailOptions)
      .then((info) => console.log("Email sent:", info.response))
      .catch((error) => console.log(error));

    res.status(200).json({
      message: "Password reset instructions sent to your email.",
      token: encodedToken,
    });
  } catch (error) {
    new AppError(
      "An error occurred while processing your request.",
      500,
      "errors.international_server"
    );
  }
};

exports.recoveryForgotPassword = async (req, res, next) => {
  try {
    const { token, password } = req.body;

    const decodedToken = atob(token);
    const decoded = await promisify(jwt.verify)(
      decodedToken,
      process.env.JWT_SECRET
    );
    const user = await User.findById(decoded.id).select("+password");
    const hashedPassword = await bcrypt.hash(password, 10);

    await user.updateOne({ password: hashedPassword });
    return res.status(200).json({
      status: "success",
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    console.log("adminController::accessToken Can't decode refresh token");
    new AppError("User is not found", 401, "errors.user_not_found");
  }
};
