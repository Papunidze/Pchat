const User = require("../models/userModels");
const AppError = require("../utils/appError");
const { default: mongoose } = require("mongoose");
const catchAsync = require("../utils/catchAsync");
const { uploadImage } = require("../config/storage");
const bcrypt = require("bcrypt");

/**
 * Get User By Id.
 */

exports.getUserById = catchAsync(async (req, res, next) => {
  const userId = req.params.userId;

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(
      new AppError("User is not Found", 401, "errors.user_not_found")
    );
  }
  let user = await User.findById(userId);

  res.status(200).json({
    status: "success",
    user,
  });
});

/**
 * Get User.
 */
// exports.allUsers = catchAsync(async (req, res) => {
//   const keyword = req.query.search
//     ? {
//         $or: [
//           { name: { $regex: req.query.search, $options: "i" } },
//           { email: { $regex: req.query.search, $options: "i" } },
//         ],
//       }
//     : {};

//   const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
//   res.send(users);
// });

exports.getUser = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  let user = await User.findById(userId);

  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(
      new AppError("User is not Found", 401, "errors.user_not_found")
    );
  }

  res.status(200).json({
    status: "success",
    user,
  });
});

exports.updateUser = catchAsync(async (req, res, next) => {
  const userId = req.user.id;
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return next(
      new AppError("User is not Found", 401, "errors.user_not_found")
    );
  }


    { new: true }
  );
  res.status(201).json({
    status: "success",
    user: updatedUser,
  });
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  try {
    const userId = req.user.id;
    const { password, newPassword } = req.body;
    const user = await User.findById(userId).select("+password");
    if (!user) {
      return next(
        new AppError("User is not Found", 401, "errors.user_not_found")
      );
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return next(
        new AppError(
          "Invalid password. Please check your credentials.",
          401,
          "errors.invalid_password"
        )
      );
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    await user.updateOne({ password: hashedPassword });

    res.status(200).json({
      status: "success",
      message: "Password updated successfully",
    });
  } catch (error) {
    console.log(`userController::updatePassword ${error.message}`);
    return next(new AppError(error.message, 500));
  }
});
