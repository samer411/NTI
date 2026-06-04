const User = require("../models/user.model")

//get all users
exports.getAllUsers = async (req,res)=>{
    try{
    const allUsers = await User.find()
    res.status(200).json(allUsers,{message:"All Found User"})
    }
    catch(err){
        console.log(err)
    }
}

// get user by id
exports.getUserById = async(req,res)=>{
    try{

    const id = req.params.id
    const existUser = await User.findById(id)
    res.status(200).json(existUser)
    }
    catch(err){
        console.log(err)
    }
}
exports.CreateUser = async(req,res)=>{
    // const {name,email,password} = req.body
    const newUser = new User(req.body)
    await newUser.save()
    res.status(201).json({message:"New User Created Successfully",newUser})
}

//update user
exports.UpdateUser = async(req,res)=>{
    const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updateUser)
}

//partial update
exports.PartialUpdateUser = async(req,res)=>{
    const partialUpdateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(partialUpdateUser)
}
//delete user
exports.deleteUser = async(req,res)=>{
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedUser)
}
//query string filter
exports.filterUsers = async(req,res)=>{
    const filteredUsers = await User.find({email: req.query.email})
    res.status(200).json(filteredUsers)
}


