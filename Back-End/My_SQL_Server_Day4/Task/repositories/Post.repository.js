const {post,User} = require("../models")

class postRepo {
    async getAllPosts(){
        return await post.findAll(
            {include:[{model:User}]}
        )
    }
    async getPost(id){
        return await post.findByPk(id)
    }
    async createPost(data){
        return await post.create(data)
    }
    async deletePost(id){
        const post = await post.findByPk(id)
        if(!post){
            return null
        }
        await post.destroy()
    }
        async updatePost(id,data){
        const p = await post.update(data,{where:{id:id}})
        if(!p){
            return null
        }
    }}

module.exports = new postRepo()