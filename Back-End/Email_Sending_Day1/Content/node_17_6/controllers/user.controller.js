const { JsonWebTokenError } = require('jsonwebtoken')
const userservice = require('../services/user.service')
exports.register=async(req,res)=>{
    try{
        const user = await userservice.register(req.body)
        res.status(201).json({
            message:"register DONE",
            user,
        })

    }catch(err){
        console.log(err)
    }

}
exports.verifymail=async(req,res)=>{
   try{
     const id = req.usertoken.userid
    await userservice.verifymail(id)
    res.json({message:"email confirm"})
   }catch(err){
    console.log(err)
   }
   
}
exports.resetpassword=async(req,res)=>{
    try{
        await userservice.resetpassword(req.body.email)
        res.json({message:"check your email to change password"})
    }catch(err){
        console.log(err)
    }
}
exports.changepassword=async(req,res)=>{
    try{
        const userid = req.usertoken.userid
        await userservice.changepassword(userid,req.body.newpassword)
        res.json({message:"password reset Done"})
    }catch(err){
        console.log(err)
    }
}