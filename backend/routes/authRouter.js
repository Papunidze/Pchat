const authController = require("../controllers/authController");
const express = require("express");
const { signUpValidation, validate } = require("../middleware/validation");

const router = express.Router();

router.post("/signup", signUpValidation, validate, authController.signup);
module.exports = router;
