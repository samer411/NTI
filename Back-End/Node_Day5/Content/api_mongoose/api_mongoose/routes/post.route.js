const postcontoller= require('../controllers/post.controller')
const express = require ('express')
const router = express.Router()
const verifyToken = require('../middlewares/verifyToken')

router.use(verifyToken)
router.post('/',postcontoller.addpost)
router.get('/',postcontoller.getallposts)
router.post('/:id',postcontoller.addcomment)
module.exports= router