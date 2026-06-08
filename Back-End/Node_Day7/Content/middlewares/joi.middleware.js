const validate=(schema) =>{
    return (req,res,next)=>{
        const {err,value} = schema.validate(req.body,{abortEarly:false})
        if(err){
            
        }
        req.body = value;
        next();
    }
} 