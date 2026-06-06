const Post = require("../models/post.model")
module.exports = async (req,res,next)=>{
    const post_id = req.params.id;
    const post = await Post.findById(post_id)
    const post_user_id = post.userId;
    const comming_user_id = req.headers['userId']
    console.log(typeof(post_user_id))
    console.log(typeof(comming_user_id))
    if(post_user_id==comming_user_id){
        next()
    }
    else{
        res.status(401).json({message:"Not Authorized"})
    }
}