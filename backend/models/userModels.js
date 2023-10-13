const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  avatar: { type: String },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    validate: {
      validator: function (email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      },
      message: "Invalid email format",
    },
  },
  password: {
    type: String,
    minlength: 8,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.virtual("profileImageUrl").get(function () {
  if (this.profileImage && this.profileImage.contentType) {
    return `data:${
      this.profileImage.contentType
    };base64,${this.profileImage.data.toString("base64")}`;
  }
  return "";
});

const User = mongoose.model("User", userSchema);

module.exports = User;
