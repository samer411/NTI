const mongoose = require("mongoose")
const userScheme = mongoose.Schema({
    username:String,
    password:String
})


module.exports = mongoose.model("User",userScheme)