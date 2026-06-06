const mongoose = require('mongoose')
const userschema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    role:{type:String,require:true,enum:['dev','user','admin']},
    password:{type:String,required:true}
})
module.exports=mongoose.model("User",userschema)
