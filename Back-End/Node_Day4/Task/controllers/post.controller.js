const Post = require("../models/post.model")

//get all Posts
exports.getAllPosts = async (req,res)=>{
    try{
    const allPosts = await Post.find().populate("userId")
    res.status(200).json({data:allPosts,counter : req.counter,message:"All Found Post"})
    }
    catch(err){
        console.log(err)
    }
}

// get Post by id
exports.getPostById = async(req,res)=>{
    try{

    const id = req.params.id
    const existPost = await Post.findById(id)
    res.status(200).json(existPost)
    }
    catch(err){
        console.log(err)
    }
}
exports.CreatePost = async(req,res)=>{
    // const {name,email,password} = req.body
    const newPost = new Post(req.body)
    await newPost.save()
    res.status(201).json({message:"New Post Created Successfully",newPost})
}

//update Post
exports.UpdatePost = async(req,res)=>{
    const updatePost = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatePost)
}

//partial update
exports.PartialUpdatePost = async(req,res)=>{
    const partialUpdatePost = await Post.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(partialUpdatePost)
}
//delete Post
exports.deletePost = async(req,res)=>{
    const deletedPost = await Post.findByIdAndDelete(req.params.id)
    res.status(200).json(deletedPost)
}
//query string filter
exports.filterPosts = async(req,res)=>{
    const filteredPosts = await Post.find(req.query)
    res.status(200).json(filteredPosts)
}

exports.addComment = async(req,res)=>{
    const id =  req.params.id;
    const post = await Post.findById(id)
    post.comment.push(req.body)
    post.save()
    res.status(200).json(post)
}


