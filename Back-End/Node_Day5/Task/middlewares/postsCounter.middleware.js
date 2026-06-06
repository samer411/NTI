const Post = require("../models/post.model")

const postsCounter = async (req,res,next)=>{
    const counter = await Post.countDocuments();
    req.counter= counter;
    console.log(counter)
    next()
}

module.exports = {postsCounter}