const User = require("../models/user.model")
const createToken = require("../utils/tokenCreate")

exports.register = async(req,res)=>{
    const{name,email,password,role} = req.body
    const newUser = new User ({name,email,password,role})
    await newUser.save()
    const token = createToken({name:newUser.name,role:newUser.role,id:newUser._id})
    res.status(201).json({message:"User Created",user:newUser,token})
}
exports.login = async(req,res)=>{
    const{email,password}=req.body
    const user = await User.findOne({email})
    const token = createToken({name:user.name,role:user.role,id:user._id})
    res.status(200).json({message:"login Done",user,token})
}