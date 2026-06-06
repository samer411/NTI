const jwt = require("jsonwebtoken")
module.exports = (req,res,next)=>{
    try{
        const token = req.headers['authorization']
        const payload = jwt.verify(token,process.env.secret_key)
        console.log(payload)
        req.headers['userId'] = payload.id;
        next()
    }
    catch(err){
        console.log(err)
    }
}