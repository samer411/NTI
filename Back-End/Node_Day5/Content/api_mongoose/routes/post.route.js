const postcontoller= require('../controllers/post.controller')
const express = require ('express')
const router = express.Router()
const verifytoken = require('../middlewares/verifytoken')

// router.use(verfiytoken)
router.post('/',verifytoken,postcontoller.addpost)
router.get('/',verifytoken,postcontoller.getallposts)
router.post('/:id',verifytoken,postcontoller.addcomment)
module.exports= router