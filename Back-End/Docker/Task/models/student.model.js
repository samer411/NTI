const mongoose = require("mongoose")
const studentScheme = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{timestamps:true})


module.exports = mongoose.model("Student",studentScheme)