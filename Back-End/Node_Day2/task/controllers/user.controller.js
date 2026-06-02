const {users,db}  = require("../index")
const fs = require("fs")

const getAllUsers = (req,res)=>{
    res.status(200).json(users)
}
const getUserById=(req,res)=>{
    const id = parseInt(req.params.id)
    const user = users.find(p=>p.id===id)
    res.status(200).json(user)
}
const createUser  = (req,res)=>{
    const newUser = {
        id:users.length+1,
        name:req.body.name,
        username:req.body.username,
        location:req.body.location
    }
    users.push(newUser)
    res.status(200).json(newUser)
    fs.writeFileSync("./DB.json",JSON.stringify(db,null,2))
}

const deleteUser = (req,res)=>{
    const id = parseInt(req.params.id)
    const index = users.findIndex(p=>p.id===id)
    const userUser = users.splice(index,1)

    res.status(200).json(userDeleted)
    fs.writeFileSync('./DB.json',JSON.stringify(db,null,2))
}
const updateUser = (req,res)=>{
    const id = parseInt(req.params.id)
    const user = users.find(p=>p.id===id)
    user.title = req.body.title || user.title
    user.userId = req.body.userId || user.userId
    user.body = req.body.body || user.body

    
    res.status(200).json(user)
    fs.writeFileSync('./DB.json',JSON.stringify(db,null,2))
}
const partialUpdateUser = (req,res)=>{
    const id = parseInt(req.params.id)
    const user = users.find(p=>p.id===id)
    user.title = req.body.title || user.title

    
    res.status(200).json(user)
    fs.writeFileSync('./DB.json',JSON.stringify(db,null,2))
}
const filterUsers = (req,res)=>{

    const {location} = req.query
    const filteredusers = users.filter(user=>user.location=== location)

    res.status(200).json(filteredusers)
    
}
module.exports={getAllUsers,getUserById,createUser,deleteUser,updateUser,partialUpdateUser,filterUsers}