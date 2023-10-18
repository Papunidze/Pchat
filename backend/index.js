const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config({ path: "./config/.env" });

connectDB();

const passport = require("./config/passport");

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

// Routes
app.use("/auth", require("./routes/auth-router"));
app.use("/user", require("./routes/user-router"));

app.use((err, req, res, next) => {
  console.error(`Error handler : ${err.message}`);
  res.locals.error = err;
  const status = err.statusCode || 500;
  res.status(status).json({
    status: "fail",
    message: err.message,
    errorKey: err.errorKey,
  });
});

module.exports = app;
