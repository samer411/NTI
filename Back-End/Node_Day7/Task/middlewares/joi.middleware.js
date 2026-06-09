const validate = (schema)=>{
    return(req,res,next)=>{
        const validation= schema.validate(req.body)
        if(validation.error){
            res.status(400).json({message:validation.error.message})
        }
        // req.body = validation.value;
        next()
    }
}

module.exports = validate