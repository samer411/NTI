const validate = (schema)=>{
    return(req,res,next)=>{
        const inputdata={...req.body}

        const validation= schema.validate(inputdata)
        if(validation.error){
           res.status(400).json({message:"server error"})
        }
        
        return next()
    }
}

module.exports = validate