const { check, validationResult } = require("express-validator");

module.exports = {
  signUpValidation: [
    check("name")
      .isLength({ min: 3, max: 50 })
      .withMessage("Name must be at least 3 characters long")
      .custom((value) => {
        if (!/^[A-Za-z\s]+$/.test(value)) {
          throw new Error("Name can only contain alphabets and spaces");
        }
        return true;
      }),

    check("username")
      .isLength({ min: 3, max: 20 })
      .withMessage("Username must be at least 3 characters long")
      .custom((value) => {
        if (/\s/.test(value)) {
          throw new Error("Username cannot contain white spaces");
        }
        return true;
      }),
    check("email").isEmail().withMessage("Invalid email address"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    check("passwordConfirm")
      .custom((value, { req }) => value === req.body.password)
      .withMessage("Passwords do not match"),
  ],
  signInValidation: [
    check("email").isEmail().withMessage("Invalid email address"),
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
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
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    check("newPassword")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    check("newPasswordConfirm")
      .custom((value, { req }) => value === req.body.newPassword)
      .withMessage("Passwords do not match"),
  ],
  updateForgotPassword: [
    check("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
  ],
  validate: (req, res, next) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return next();
    }

    const extractedErrors = errors.array().map((err) => ({
      [err.path]: err.msg,
    }));

    return res.status(422).json({
      message: "Validation failed, entered data is incorrect.",
      errors: extractedErrors,
    });
  },
};
