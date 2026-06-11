const mongoose = require('mongoose')
msgschema = new mongoose.Schema({
    sender:String,
    receive:String,
    msg_body:String,
    isbeensend:{type:Boolean,default:false}
})
module.exports=mongoose.model("Msg",msgschema)

