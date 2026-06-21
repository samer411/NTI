const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const studentSchema = mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},
{timestamps:true})
studentSchema.pre('save',async function(){
    if(!this.isModified("password")) return next();
    try{
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
     
    }catch(error){
        console.log(error)
    }
})


module.exports = mongoose.model("Student",studentSchema)