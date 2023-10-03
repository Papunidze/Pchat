const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const User = require("../models/userModels");
const bcrypt = require("bcrypt");

const signTokens = (id) => {
  const refreshToken = jwt.sign({ id }, process.env.JWT_REFRESH_SECRET, {
    expiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  });
  const accessToken = jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return { accessToken, refreshToken };
};

exports.signup = async (req, res, next) => {
  try {
    const existingUser = await User.findOne({ email: req.body.email });
    if (existingUser) {
      return next(new AppError("Email already in use", 409));
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

    const tokens = signTokens(newUser._id);

    res.status(201).json({
      ...tokens,
      status: "success",
      user: newUser,
    });
  } catch (err) {
    return next(new AppError(err.message, 400));
  }
};

exports.signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new AppError("User not found", 404));
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!user || !user.password || !isPasswordCorrect) {
      return next(new AppError("Login data is incorrect!", 401));
    }

    const tokens = signTokens(user._id);

    console.log(`adminController::login ${email} logged in`);

    res.status(200).json({
      ...tokens,
      status: "success",
      user: user,
    });
  } catch (err) {
    console.log(err);
    return next(new AppError("Something went wrong!", 401));
  }
};

exports.signout = async (req, res, next) => {
  try {
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");
    res.status(200).json({
      status: "success",
      message: "Logged out",
    });
  } catch (error) {
    console.log(error.message);
    return next(new AppError("Something went wrong!", 401));
  }
};

exports.refreshToken = async (req, res, next) => {
  try {
    const refreshToken = req.cookies.refreshToken || req.body.token;

    if (!refreshToken) {
      console.log("adminController::refreshToken User has no refresh token");
      return next(new AppError("User is not authorized!", 401));
    }

    const decoded = await promisify(jwt.verify)(
      refreshToken,
      process.env.JWT_REFRESH_SECRET
    );

    if (!decoded || !decoded.id) {
      console.log("adminController::refreshToken Can't decode refresh token");
      return next(new AppError("User is not authorized", 401));
    }

    const user = await User.findById(decoded.id);

    if (!user) {
      console.log("adminController::refreshToken User not found");
      return next(new AppError("User not found", 404));
    }

    const tokens = signTokens(user._id);

    res
      .status(200)
      .json({ status: "success", accessToken: tokens.accessToken });
  } catch (error) {
    console.log(error.message);
    return next(new AppError("Something went wrong!", 500));
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
      return next(new AppError("User is not authorized!", 401));
    }

    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id);

    if (!user) {
      console.log(
        "adminController::protect Can't find the user associated with the token"
      );
      return next(new AppError("User is not authorized", 401));
    }

    req.user = user;

    next();
  } catch (err) {
    console.log(err.message);
    return next(new AppError("User is not authorized", 401));
  }
};
