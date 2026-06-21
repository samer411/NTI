module.exports = async function (req,res,next){
    console.log(req.session)
    if(!req.session.student){
        res.status(401).json({message:"Loing Please"})
    }
    next()
}