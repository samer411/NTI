const User = require('../models/user.model')
const emailservice=require('./email.service')
const jwt = require('jsonwebtoken')

exports.register=async(data)=>{
    const {name,email,password}=data
    const exist = await User.findOne({email})
    if(exist) throw new Error("email already exists")
    const user = await User.create({
    name,email,password
})
const token = 
jwt.sign({userid:user._id,type:"registertoken"},
process.env.jwt_secret,{expiresIn:"1h"})
 await emailservice.sendemailwelcome(user.email,user.name)
 const tokenverify=jwt.sign(
    {userid:user._id,type:"verify"},
    process.env.jwt_secret,
    {expiresIn:"24h"})
    await emailservice.sendverifymail(user.email,tokenverify)
 return user
}
exports.verifymail=async(userid)=>{
    const user = await User.findById(userid)
    if(!user)throw new Error("user not found")
        user.emailconfirm=true
    await user.save()
}
exports.resetpassword=async(email)=>{
    const user = await User.findOne({email})
    if(!user) throw new Error("user not found")
        const tokenreset = jwt.sign({userid:user._id,type:"reset"},process.env.jwt_secret,
    {expiresIn:"15m"}
)
await emailservice.resetpassword(email,tokenreset)
}
exports.changepassword=async(userid,newpassword)=>{
    const user = await User.findById(userid)
    user.password=newpassword
    await user.save()

}