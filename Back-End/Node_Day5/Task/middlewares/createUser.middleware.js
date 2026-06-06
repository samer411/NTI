const createUser = (req,res,next)=>{
    console.log(req.body.name)
    next()
}


module.exports = {createUser}