const mongoose = require('mongoose')
const commentschema = require('./comments.model')
const postschema = new mongoose.Schema({
    userid:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    title:{type:String,required:true,maxlength:10},
    id:{type:mongoose.Schema.ObjectId},
    body:{type:String,required:true},
    comments:[commentschema]
})
module.exports=mongoose.model("Post",postschema)