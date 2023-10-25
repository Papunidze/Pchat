export const errorsResponse: { [key: string]: string } = {
  "not.found": "",
  "errors.forbidden": "",
  "errors.unauthorized": "User is not authorized",
  "errors.bad_request": "Something Was Wrong",
  "errors.email_in_use": "Email already in use. Please use a different email.",
  "errors.username_in_use":
    "Username already in use. Please choose a different username",
  "error.user_not_found":
    "We couldn’t find an account matching the email and password you entered. Please check your email and password and try again.",
  "errors.invalid_email": "Invalid email address",
  "errors.invalid_credentials":
    "Invalid email or password. Please check your credentials.",
  "errors.min_6": "Password must be at least 6 characters long",
  "errors.min_3": "must be at least 3 characters long",
  "errors.no_whitespace": "Username cannot contain white spaces",
  "errors.only_alpabets": "can only contain alphabets and spaces",
  "errors.requires": "This field is required",
  "errors.not_matches_password": "Passwords do not match",
  "errors.invalid_password_reset_url":
    "Password reset url is invalid or has expired. Try pasting the URL into your browser or requesting another password reset url.",
};
