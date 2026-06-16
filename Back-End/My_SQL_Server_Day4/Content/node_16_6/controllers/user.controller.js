const userservice = require("../services/user.service")

exports.getall=async(req,res)=>{
    try{
        const users=await userservice.getall()
        res.status(200).json(users)
    }catch(err){
        console.error(err,err.message)
    }
}
exports.create=async(req,res)=>{
    try{
        const user =await userservice.create(req.body)
        res.status(201).json(user)
    }catch(err){
        console.error(err,err.message)
    }
        
    }
