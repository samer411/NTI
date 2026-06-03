const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')


// filteration route must be the first one before everything because he will not distinguish between parameters(id) and query string

router.get("/filter",postController.filterPosts)
router.get("/",postController.getAllPosts)
router.get("/:id",postController.getPostById)
router.post("/",postController.CreatePost)
router.put("/:id",postController.UpdatePost)
router.patch("/:id",postController.PartialUpdatePost)
router.delete("/:id",postController.deletePost)


module.exports = router