const User = require("../models/user.model")
const createToken = require('../utils/tokenCreate')
exports.register = async(req,res)=>{
    const {name,email,password,role} = req.body
    const newUser = new User({name,email,password,role})
    await newUser.save()
    const token = createToken({name:newUser,role:newUser.role,id:newUser._id})
    res.status(201).json({message:"user created",token})
}

exports.login = async(req,res)=>{
    const{email,password} = req.body
    const usser  = await User.findOne({email:email})
    const token = createToken({name:newUser,role:newUser.role,id:newUser._id})

    res.status(200).json({message:"login done ",user,token})
}