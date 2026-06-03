const  mongoose = require("mongoose");

// we use new because we may need to make different schemas
const userSchema = new mongoose.Schema({

    name:{type:String,required:true},
    email:{type:String,unique:true,required:true},
    password:{type:String,required:true}

})


module.exports=mongoose.model("User",userSchema)

