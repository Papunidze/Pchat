const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = express();

dotenv.config({ path: "./config/.env" });

connectDB();
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());

app.use((err, req, res, next) => {
  console.error(`Error handler : ${err.message}`);
  res.locals.error = err;
  const status = err.statusCode || 500;
  res.status(status).json({
    status: "fail",
    message: err.message,
  });
});

module.exports = app;