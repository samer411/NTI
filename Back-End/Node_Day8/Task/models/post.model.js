const mongoose = require("mongoose")

const commentSchema = require('./comments.model')

const postSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:[true,"userId is required"]},
    id:{type:mongoose.Schema.ObjectId},
    title:{type:String,required:[true,"title is required"]},
    body:{type:String,required:[true,"body is required"]},
    comment:[commentSchema]
})

module.exports=mongoose.model("Post",postSchema)