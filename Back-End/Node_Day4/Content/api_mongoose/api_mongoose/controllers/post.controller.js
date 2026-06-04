const Post = require('../models/post.model')
const addpost= async(req,res)=>{
    try{
        const postdata =req.body
        // const{userid,title}=req.body
        const newpost= await Post.create(postdata)
        res.status(201).json(newpost)
    }catch(err){
        console.log(err)
    }
}
const getallposts=async(req,res)=>{
    try{
        const allposts =  await Post.find().populate('userid')
        res.status(200).json(allposts)
    }catch(err){
        console.log(err)
    }
}
const addcomment =async (req,res)=>{
    try{
        const id = req.params.id
        // const{id}=req.params
        const post =  await Post.findById(id)
        const{userid,text}=req.body
        post.comments.push({ userid,text})
        await post.save()
        res.status(201).json(post)
    }catch(err){ console.log(err)}
}
module.exports={addpost,getallposts,addcomment}
