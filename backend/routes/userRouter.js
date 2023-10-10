const express = require("express");
const authController = require("../controllers/authController");
const userController = require("../controllers/userContoller");
const passport = require("passport");
const {
  validate,
  updateUserValidation,
  updatePasswordValidation,
} = require("../middleware/validation");

const router = express.Router();
router
  .route("/")
  .get(authController.protect, userController.getUser)
  .patch(
    authController.protect,
    updateUserValidation,
    validate,
    userController.updateUser
  );

router.get("/:userId", authController.protect, userController.getUserById);

router.patch(
  "/update-password",
  authController.protect,
  updatePasswordValidation,
  validate,
  userController.updatePassword
);

module.exports = router;
