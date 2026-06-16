const postService = require("../services/post.service")

exports.getAll = async(req,res)=>{
    try{
    const posts = await postService.getAll()
    res.status(200).json(posts)
    }
    catch(err){
        console.error(err)
    }
}
exports.create = async(req,res)=>{
    try{
        const post = await postService.create(req.body)
        res.status(201).json(post)
    }
    catch(err){
        console.error(err,err.message)
    }
   
}
 exports.getById = async(req,res)=>{
        try{
            const post = await postService.getById(req.params.id)
            res.status(200).json(post)
        }
        catch(err){
            console.error(err,err.message)
        }
}
exports.delete = async(req,res)=>{
        try{
            
            const post = await postService.delete(req.params.id)
            
            res.status(200).json(post)
        }
        catch(err){
            console.error(err,err.message)
        }
}
exports.update = async(req,res)=>{
    try{
        const post = await postService.update(req.params.id,req.body)
        res.status(200).json(post)
    }
    catch(err){
            console.error(err,err.message)
        }
}
