const { check, validationResult } = require("express-validator");

module.exports = {
  signUpValidation: [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long"),
    check("email").isEmail().withMessage("Invalid email address"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    check("passwordConfirm")
      .custom((value, { req }) => value === req.body.password)
      .withMessage("Passwords do not match"),
  ],
  loginValidation: [
    check("email").isEmail().withMessage("Invalid email address"),
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
  ],
  updateUserValidation: [
    check("name")
      .isLength({ min: 3 })
      .withMessage("Name must be at least 3 characters long")
      .optional({ nullable: true }),
    check("email")
      .isEmail()
      .withMessage("Invalid email address")
      .optional({ nullable: true }),
    check("picture").notEmpty().optional({ nullable: true }),
  ],
  updatePasswordValidation: [
    check("password")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    check("newPassword")
      .isLength({ min: 8 })
      .withMessage("Password must be at least 8 characters long"),
    check("newPasswordConfirm")
      .custom((value, { req }) => value === req.body.newPassword)
      .withMessage("Passwords do not match"),
  ],
  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      console.log("Validation passed!");
      return next();
    }

    const extractedErrors = {};
    errors.array().map((err) => (extractedErrors[err.param] = err.msg));
    return res.status(422).json({
      message: "Validation failed, entered data is incorrect.",
      errors: extractedErrors,
    });
  },
};
