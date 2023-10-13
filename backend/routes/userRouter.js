const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userContoller");
const {
  validate,
  updateUserValidation,
  updatePasswordValidation,
} = require("../middleware/validation");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, userController.getUser)
  .post(
    authController.protect,
    updateUserValidation,
    validate,
    userController.updateUser
  );

router.get("/:userId", authController.protect, userController.getUserById);

router.post(
  "/update-password",
  authController.protect,
  updatePasswordValidation,
  validate,
  userController.updatePassword
);

module.exports = router;
