const jwt = require('jsonwebtoken')
module.exports = (req,res,next)=>{
    try{
     const token = req.headers['authorization']
     const payload = jwt.verify(token,process.env.secret_key)
     next()
    }catch(err){
        console.log(err)
    }

}
