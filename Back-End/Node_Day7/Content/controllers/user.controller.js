const userService = require("../services/user.service")

const getAllUsers = async(req,res,next)=>{
    const users = await userService.getAllUsers()
    res.json(users)
}