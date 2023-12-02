const express = require("express");
const authController = require("../controllers/auth-controller");
const messageController = require("../controllers/message-controller");

const router = express.Router();

router.post("/", authController.protect, messageController.sendMessage);
router.get("/:chatId", authController.protect, messageController.fetchMessages);
module.exports = router;
