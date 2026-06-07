module.exports = (err,req,res,next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || 'interanl server error'
   res.status(statusCode).json({
    failed:true,
    message
   }) 
}