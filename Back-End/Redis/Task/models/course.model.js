const mongoose = require("mongoose")
const courseScheme = mongoose.Schema({
    title:{type:String,reuired:true},
    description:String,
    ownerId:{type:mongoose.Schema.Types.ObjectId,ref:'Student'}
},{timestamps:true})

module.exports = mongoose.model("Course",courseScheme)