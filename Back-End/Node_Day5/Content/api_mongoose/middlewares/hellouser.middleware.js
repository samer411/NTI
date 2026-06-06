const printname = (req,res,next)=>{
    console.log('hello user')
    next()
}
module.exports={printname}