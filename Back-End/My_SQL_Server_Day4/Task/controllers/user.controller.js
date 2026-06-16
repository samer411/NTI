const userService = require("../services/user.service")

exports.getAll = async(req,res)=>{
    try{
    const users = await userService.getAll()
    res.status(200).json(users)
    }
    catch(err){
        console.error(err)
    }
}
exports.create = async(req,res)=>{
    try{
        const user = await userService.create(req.body)
        res.status(201).json(user)
    }
    catch(err){
        console.error(err,err.message)
    }
   
}
 exports.getById = async(req,res)=>{
        try{
            const user = await userService.getById(req.params.id)
            res.status(200).json(user)
        }
        catch(err){
            console.error(err,err.message)
        }
}
exports.delete = async(req,res)=>{
        try{
            
            const user = await userService.delete(req.params.id)
            
            res.status(200).json(user)
        }
        catch(err){
            console.error(err,err.message)
        }
}
exports.update = async(req,res)=>{
    try{
        const user = await userService.update(req.params.id,req.body)
        res.status(200).json(user)
    }
    catch(err){
            console.error(err,err.message)
        }
}
