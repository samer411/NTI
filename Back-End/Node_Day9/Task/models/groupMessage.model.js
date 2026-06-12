const mongoose = require("mongoose");
const groupMessageSchema = mongoose.Schema({
    sender:String,
    group:String,
    messageBody:String,
    isSent:{type:Boolean,default:false}
})
module.exports=mongoose.model("GroupMessage",groupMessageSchema)