const mongoose = require("mongoose")
const messageSchema = mongoose.Schema({
    sender:String,
    reciever:String,
    msgBody:String,
    isDelivered:{type: Boolean,default:false}
})

module.exports = mongoose.model("Message",messageSchema)