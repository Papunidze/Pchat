const Chat = require("../models/chat-models");
const Message = require("../models/message-models");
const catchAsync = require("../utils/catch-async");
const AppError = require("../utils/app-error");
const { default: mongoose } = require("mongoose");

exports.sendMessage = catchAsync(async (req, res, next) => {
  const { content, chatId } = req.body;

  if (!content || !chatId) {
    return next(
      new AppError("Chat is not found", 401, "errors.chat_not_found")
    );
  }

  const newMessage = {
    sender: {
      _id: req.user._id,
      name: req.user.name, // Assuming you have a name property in the user object
      avatar: req.user.avatar, // Assuming you have an avatar property in the user object
    },
    content: content,
    chat: chatId,
  };

  try {
    let message = await Message.create(newMessage);

    message = await Message.findById(message._id)
      .populate({ path: "sender", select: "name avatar" })
      .populate({ path: "chat.users", select: "name avatar email" })
      .exec();

    await Chat.findByIdAndUpdate(chatId, {
      latestMessage: message,
    });

    res.status(201).json(message);
  } catch (error) {
    console.error(error);
    return next(error);
  }
});

exports.fetchMessages = catchAsync(async (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.chatId)) {
    return next(
      new AppError("User is not Found", 401, "errors.user_not_found")
    );
  }

  const messages = await Message.find({ chat: req.params.chatId });

  res.status(200).json(messages);
});
