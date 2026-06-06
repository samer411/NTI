
const printRouterName = (req,res,next)=>{
    console.log(req.baseUrl)
    next()
}


module.exports={printRouterName}