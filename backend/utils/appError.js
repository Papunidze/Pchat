class AppError {
  constructor(res, message, statusCode, errorKey = "errors.bad_request") {
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";

    res.status(this.statusCode).json({
      message,
      errorKey,
      timestamp: new Date().toISOString(),
    });
  }
}

module.exports = AppError;
