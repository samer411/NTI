const User = require("../models/user.model")
const emailservice = require("./email.service")
const jwt = require("jsonwebtoken")

exports.register = async(data)=>{
    const {name,email,password} = data
    const exist = await User.findOne({email})
    if(exist) throw new Error("email already exist")
        const user = await User.create({
    name,email,password
})
}
const token = jwt.sign({userid:user._id,type:"registertoken"},
    process.env.jwt_secret,{expiresIn:"1h"})
await emailservice.sendemailwelcome(user.email,user.name)
const tokenverify = jwt.sign(
    {userid:user._id,type:"verify"},
    process.env.jwt_secret,
    {expiresIn:"24h"})
    await emailservice.send