const jwt = require("jsonwebtoken")
const verifytoken=(type)=>{
    return(req,res,next)=>{
        try{
        const token=req.params.token
        if(!token) return res.status(400).json({message:"token missing"})
            const payload = jwt.verify(token,process.env.jwt_secret)
        if(payload.type!==type) return res.status(400).json({message:"type token err"})
        req.usertoken=payload
        next()
    }catch(err){
        res.status(400).json({message:"invalid token or expire"})
    }
} 
}
module.exports=verifytoken

