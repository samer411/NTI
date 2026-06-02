const express=require('express')
const router = express.Router()
const {users}= require('../index')

const filterusers= (req,res)=>{
     if(req.query.location){
    const loc = req.query.location
    const usersfilter = users.filter(u=>u.location===loc)
    res.status(200).json(usersfilter)
   }
    res.status(200).json(users)
}

router.get('/',filterusers)
module.exports=router