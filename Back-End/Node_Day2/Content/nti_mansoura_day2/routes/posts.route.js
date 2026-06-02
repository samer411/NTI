const express = require ('express')
const router = express.Router()
const {posts} = require('../index')
// const postcontroller= require('../controllers/post.controller')
const {getallposts,getpostbyid,createpost,deltepost}=require('../controllers/post.controller')


router.get('/',getallposts)
router.get('/:id',getpostbyid)
router.post("/",createpost)
router.delete('/deletepost/:id',deltepost)

module.exports=router