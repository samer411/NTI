const mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
    minlength: [3, "name must be then 3 characters"],
  },
  role: { type: String, required: true, enum: ["dev", "admin", "user"] },
  email: {
    type: String,
    unique: [true, "email is already exist"],
    required: [true, "email is required"],
    // match: [/^\+@.\+$/, "Invalid email"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: [3, "password must then 3 characters"],
  },

},{timestamps:true});

userSchema.pre('save',async function(){
    this.password = await bcrypt.hash(this.password,10)
})

userSchema.methods.comparepassword = async function(){
   return await bcrypt.compare(password,this.password)
}

module.exports = mongoose.model("User", userSchema);