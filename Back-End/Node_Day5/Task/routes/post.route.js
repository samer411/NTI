const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')
const {printRouterName} = require("../middlewares/router.middleware")
const {postsCounter} = require("../middlewares/postsCounter.middleware")


// filteration route must be the first one before everything because he will not distinguish between parameters(id) and query string
router.use(printRouterName)
router.get("/filter",postController.filterPosts)
router.get("/",postsCounter,postController.getAllPosts)
router.get("/:id",postController.getPostById)
router.post("/",postController.CreatePost)
router.post("/:id",postController.addComment)
router.put("/:id",postController.UpdatePost)
router.patch("/:id",postController.PartialUpdatePost)
router.delete("/:id",postController.deletePost)


module.exports = router