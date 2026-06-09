const express = require('express')
const router = express.Router()
const postController = require('../controllers/post.controller')
const {printRouterName} = require("../middlewares/router.middleware")
const {postsCounter} = require("../middlewares/postsCounter.middleware")
const verifyToken  = require("../middlewares/verifyToken")
const deletePost = require("../middlewares/deletePost")
const postOwner = require("../middlewares/postOwner.middleware")
const validateMiddleware = require("../middlewares/joi.middleware")
const createPostValidate = require("../validators/post.validate")
router.use(verifyToken)

// filteration route must be the first one before everything because he will not distinguish between parameters(id) and query string
router.use(printRouterName)
router.get("/filter",postController.filterPosts)
router.get("/",postsCounter,postController.getAllPosts)
router.get("/:id",postController.getPostById)
router.post("/",validateMiddleware(createPostValidate),postController.CreatePost)
router.post("/:id",postController.addComment)
router.put("/:id",postController.UpdatePost)
router.patch("/:id",postController.PartialUpdatePost)
router.delete("/:id",verifyToken,postOwner,postController.deletePost)


module.exports = router