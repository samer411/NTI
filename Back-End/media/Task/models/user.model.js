const mongoose = require("mongoose")
const userSchema = mongoose.Schema({
    userName:{type:String},
    email:{type:String},
    imageUrl:{type:String}
})


module.exports = mongoose.model("User",userSchema)