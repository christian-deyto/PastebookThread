const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    unique: true,
    required: true,
  },
  profilePicture: {
    type: String,
  },
  joinedDate: {
    type: Date,
    default: Date.now(),
  },
  sentFriendRequests: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  receivedFriendRequests: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  friends: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  verified: {
    type: Boolean,
    default: false,
  },
  verificationToken: String,
});


const User = mongoose.model("User", userSchema);

module.exports = User;