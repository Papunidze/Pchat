const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    sender: {
      _id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      name: { type: String },
      avatar: { type: String },
    },
    content: { type: String, trim: true },
    chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },

    // readBy: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
