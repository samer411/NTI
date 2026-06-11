const mongoose = require("mongoose");
const messageSchema = mongoose.Schema({
  sender: String,
  messageReceiver: String,
  messageBody: String,
  isSent: { type: Boolean, default: false },
});
module.exports = mongoose.model("Message", messageSchema);
