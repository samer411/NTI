const jwt = require('jsonwebtoken')
 const generatetoken=(userdata)=>{
   return jwt.sign(userdata,process.env.secret_key,{expiresIn:"1d"})
 }
 module.exports =generatetoken