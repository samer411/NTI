const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  userName: String,
  socketId: String,
  isConnected: Boolean,
});

module.exports = mongoose.model("User", userSchema);
