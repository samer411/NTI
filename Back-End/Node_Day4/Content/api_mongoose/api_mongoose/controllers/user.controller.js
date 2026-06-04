const User = require('../models/user.model')
//getallusers
exports.getallusers =async(req,res)=>{
   try{
     const allusers =await User.find()
    res.status(200).json(allusers,{message:"there all find users"})
   }catch(err){console.log(err)}
}
//get userbyid
 exports.getuserbyid=async(req,res)=>{
    // const id = req.params.id
    const existuser = await User.findById(req.params.id)
    res.status(200).json(existuser)
}
//create user 
exports.createuser =async(req,res)=>{
    // const {name,email,password}=req.body
    const newuser = new User(req.body)
    await newuser.save()
    res.status(201).json({message:'user created Done',newuser})
}
//update user 
exports.updateuser=async(req,res)=>{
    const updateuser =  await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updateuser)
}
exports.filteruser = async(req,res)=>{
   try{
     const name = req.query.name
    const userbyname =  await User.find({name:name})
    res.status(200).json(userbyname)
   }catch(err){console.log(err)}
}
//par update 
//delete user 
//query string

