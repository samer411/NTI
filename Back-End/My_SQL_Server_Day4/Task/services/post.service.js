const postRepo = require("../repositories/post.repository")
class postService{
    async getAll(){
        return postRepo.getAllPosts()
    }
    async create(data){
        return await postRepo.createPost(data)
    }
    async delete(id){
        return await postRepo.deletePost(id)
    }
    async getById (id){
        return await postRepo.getPost(id)
    }
    async update(id,data){
        return await postRepo.updatePost(id,data)
    }
}

module.exports = new postService()