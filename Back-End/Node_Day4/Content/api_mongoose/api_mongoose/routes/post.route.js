const postcontoller= require('../controllers/post.controller')
const express = require ('express')
const router = express.Router()

router.post('/',postcontoller.addpost)
router.get('/',postcontoller.getallposts)
router.post('/:id',postcontoller.addcomment)
module.exports= router