const express = require("express");
const authController = require("../controllers/authController");
const passport = require("passport");
const {
  signUpValidation,
  validate,
  signInValidation,
} = require("../middleware/validation");

const router = express.Router();

router.post("/signup", signUpValidation, validate, authController.signup);

router.post("/signin", signInValidation, validate, authController.signin);

router.post("/refresh", authController.refreshToken);

router.delete("/logout", authController.protect, authController.signout);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: process.env.CLIENT_URL,
    session: false,
  }),
  authController.googleAuthCallback
);

module.exports = router;
