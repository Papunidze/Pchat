const catchAsync = require("../utils/catch-async");
const User = require("../models/user-models");
const AppError = require("../utils/app-error");
const Chat = require("../models/chat-models");
const { default: mongoose } = require("mongoose");

exports.accessChat = catchAsync(async (req, res, next) => {
  const { id } = req.body;
  const userId = req.user.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(
      new AppError("User is not Found", 401, "errors.user_not_found")
    );
  }
  var isChat = await Chat.find({
    $and: [
      { users: { $elemMatch: { $eq: userId } } },
      { users: { $elemMatch: { $eq: id } } },
    ],
  })
    .populate("users", "-password")
    .populate("latestMessage");

  isChat = await User.populate(isChat, {
    path: "latestMessage.sender",
    select: "name avatar email username",
  });
  console.log(isChat);
  if (isChat.length > 0) {
    res.send(isChat[0]);
  } else {
    var chatData = {
      chatName: "sender",
      isGroupChat: false,
      users: [req.user._id, id],
    };

    try {
      const createdChat = await Chat.create(chatData);
      const FullChat = await Chat.findOne({ _id: createdChat._id }).populate(
        "users",
        "-password"
      );
      res.status(200).json(FullChat);
    } catch (error) {
      res.status(400);
      throw new Error(error.message);
    }
  }
});

exports.fetchChats = catchAsync(async (req, res, next) => {
  try {
    const userId = req.user.id;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      return next(
        new AppError("User is not Found", 401, "errors.user_not_found")
      );
    }
    await Chat.find({ users: { $elemMatch: { $eq: userId } } })
      .populate("users", "-password")
      .populate("latestMessage")
      .sort({ updatedAt: -1 })
      .then(async (results) => {
        results = await User.populate(results, {
          path: "latestMessage.sender",
          select: "name avatar email username",
        });
        res.status(200).send(results);
      });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});

exports.deleteChats = catchAsync(async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(
        new AppError("Chat is not Found", 401, "errors.chat_not_found")
      );
    }
    await Chat.findByIdAndDelete(id);
    res.status(200).send({ message: "Chat deleted successfully.", chatId: id });
  } catch (error) {
    res.status(400);
    throw new Error(error.message);
  }
});
