class AppError extends Error {
  constructor(message, statusCode, errorKey = "errors.bad_request") {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;
    this.errorKey = errorKey;
    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
