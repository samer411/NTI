const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    username:String,
    socketid:String,
    isconnceted:Boolean
})
module.exports=mongoose.model("User",userschema)