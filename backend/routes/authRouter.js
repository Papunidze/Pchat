const authController = require("../controllers/authController");
const express = require("express");
const {
  signUpValidation,
  validate,
  signInValidation,
} = require("../middleware/validation");

const router = express.Router();

router.post("/signup", signUpValidation, validate, authController.signup);

router.post("/signin", signInValidation, validate, authController.signin);

module.exports = router;
