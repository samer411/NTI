const {posts} = require('../index')

const getallposts=(req,res)=>{
    res.status(200).json(posts)
}
const getpostbyid=(req,res)=>{
    const id = parseInt(req.params.id)
    const post = posts.find(p=>p.id===id)
    res.status(200).json(post)
}
const createpost = (req,res)=>{
    const newpost ={
        id:posts.length +1,
        userId:req.body.userid,
        title:req.body.title,
        body:req.body.body
    }
    posts.push(newpost)
    res.status(201).json(newpost);
    fs.writeFileSync('./DB.json',JSON.stringify(db,null,2))
}
const deltepost = (req,res)=>{
    const id =parseInt( req.params.id)
    const index = posts.findIndex(p=>p.id === id)
    const postdeleted = posts.splice(index,1)
    res.status(200).json(postdeleted)
     fs.writeFileSync('./DB.json',JSON.stringify(db,null,2))
}
module.exports={getallposts,getpostbyid,createpost,deltepost}