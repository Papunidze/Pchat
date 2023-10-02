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
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
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
