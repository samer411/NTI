const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const userSchema = new mongoose.Schema({
  name: { type: String, required: [true, "name is required"] },
  email: {
    type: String,
    required: [true, "email is required"],
    // unique: [true, "email must be unique"],
    // match: [
    //   "^((?!\.)[\w\-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$",
    //   "invalid email",
    // ],
  },
  password: { type: String, required: [true, "password is required"] },
  confirmPassowrd: {
    type: String,
    required: [true, "confirm password is required"],
    select: false,
  },
  role: { type: String, enum: ["dev", "admin", "user"], default: "user" },
},{timestamps:true});

//hooks
userSchema.pre('save',async function(){

    if(this.password !== this.confirmPassowrd){
        throw new Error("password and confirm password don't match")
    }
    this.password = await bcrypt.hash(this.password,8)
    this.confirmPassowrd = undefined;
})
//methods
userSchema.methods.comparePassword = async function (password){
    return await bcrypt.compare(this.password,password)
}

// as clean code we write every function we get from third party library in a custom function

module.exports = mongoose.model('User',userSchema)