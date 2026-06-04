const mongoose = require("mongoose")

const commentSchema = require('./comments.model')

const postSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    id:{type:mongoose.Schema.ObjectId},
    title:{type:String,required:true,maxlength:10},
    body:{type:String,required:true},
    comment:[commentSchema]
})

module.exports=mongoose.model("Post",postSchema)