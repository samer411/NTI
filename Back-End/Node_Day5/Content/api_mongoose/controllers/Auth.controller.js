const User = require('../models/user.model')
const createtoken= require('../utils/tokencreate')
exports.register = async(req,res)=>{
    const {name,email,password,role}=req.body
    const newuser = new User ({name,email,password,role})
    await newuser.save()
    const token = createtoken({name:newuser.name,role:newuser.role,id:newuser._id})
    res.status(201).json({message:"user created",user:newuser,token})
}
exports.login=async(req,res)=>{
    const {email,password}=req.body
    const user= await User.findOne({email})
    const token = createtoken({name:newuser.name,role:newuser.role,id:newuser._id})
    res.status(200).json({message:"loging DOne",user,token})
}
