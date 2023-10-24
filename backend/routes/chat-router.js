const express = require("express");
const authController = require("../controllers/auth-controller");
const chatController = require("../controllers/chat-controller");

const router = express.Router();

router.post("/", authController.protect, chatController.accessChat);
router.get("/", authController.protect, chatController.fetchChats);
router.delete("/:id", authController.protect, chatController.deleteChats);

module.exports = router;
