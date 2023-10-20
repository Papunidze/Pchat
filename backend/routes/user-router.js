const express = require("express");
const authController = require("../controllers/auth-controller");
const userController = require("../controllers/user-controller");
const {
  validate,
  updateUserValidation,
  updatePasswordValidation,
} = require("../middleware/validation");

const router = express.Router();

router
  .route("/")
  .get(authController.protect, userController.getUser)
  .put(
    authController.protect,
    updateUserValidation,
    validate,
    userController.updateUser
  );

router.put(
  "/update-password",
  authController.protect,
  updatePasswordValidation,
  validate,
  userController.updatePassword
);

router.get("/search", authController.protect, userController.searchUser);
module.exports = router;
