const express = require("express")
const router = express.Router()

const {posts}= require("../index")

const {getAllPosts,getPostById,createPost,deletePost, updatePost,partialUpdatePost,filterPosts} = require("../controllers/post.controller")



router.get('/',getAllPosts)
router.get("/filter",filterPosts)
router.get('/:id',getPostById)
router.post("/",createPost)
router.delete('/:id',deletePost)
router.put('/:id',updatePost)
router.patch('/:id',partialUpdatePost)

module.exports=router