// class AppError extends Error{
//     constructor(message,stausCode){
//         super(message)
//         this.statusCode = statusCode

//     }
// }
// module.exports = AppError;

module.exports = (message,statusCode)=>{
    const err = new Error(message)
    err.statusCode = statusCode
    return err;
}