const printReq = (req,res,next)=>{
    console.log(`Mehtod: ${req.method} | Url: ${req.url}`)
    next()
}
module.exports={printReq}