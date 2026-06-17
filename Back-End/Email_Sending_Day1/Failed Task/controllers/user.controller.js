const userservice = require("../services/user.service")
exports.register = async(req,res)=>{
    try{
        const user = await userservice.register(req.body)
        res.status(201).json({
            message:"Register Done",
            user
        })
    }
    catch(err){
        console.error(err)
    }
}