const {posts,db}  = require("../index")
const fs = require("fs")

const getAllPosts = (req,res)=>{
    res.status(200).json(posts)
}
const getPostById=(req,res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find(p=>p.id===id)
    res.status(200).json(post)
}
const createPost  = (req,res)=>{
    const newPost = {
        id:posts.length+1,
        userId:req.body.userId,
        title:req.body.title,
        body:req.body.body
    }
    posts.push(newPost)
    res.status(200).json(newPost)
    fs.writeFileSync("./DB.json",JSON.stringify(db,null,2))
}

const deletePost = (req,res)=>{
    const id = parseInt(req.params.id)
    const index = posts.findIndex(p=>p.id===id)
    const postDeleted = posts.splice(index,1)

    res.status(200).json(postDeleted)
    fs.writeFileSync('./DB.json',JSON.stringify(db,null,2))
}
const updatePost = (req,res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find(p=>p.id===id)
    post.title = req.body.title || post.title
    post.userId = req.body.userId || post.userId
    post.body = req.body.body || post.body

    
    res.status(200).json(post)
    fs.writeFileSync('./DB.json',JSON.stringify(db,null,2))
}
const partialUpdatePost = (req,res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find(p=>p.id===id)
    post.title = req.body.title || post.title

    
    res.status(200).json(post)
    fs.writeFileSync('./DB.json',JSON.stringify(db,null,2))
}
const filterPosts = (req,res)=>{

    const {userId} = req.query
    const parsedUserId = parseInt(userId)
    const filteredPosts = posts.filter(post=>post.userId=== parsedUserId)

    res.status(200).json(filteredPosts)
    
}
module.exports={getAllPosts,getPostById,createPost,deletePost,updatePost,partialUpdatePost,filterPosts}