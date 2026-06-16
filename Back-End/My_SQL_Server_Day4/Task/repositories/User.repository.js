const {User,post} = require("../models")

class userRepo {
    async getAllUsers(){
        return await User.findAll(
            {include:[{model:post}]}
        )
    }
    async getUser(id){
        return await User.findByPk(id)
    }
    async createUser(data){
        return await User.create(data)
    }
    async deleteUser(id){
        const user = await User.findByPk(id)
        if(!user){
            return null
        }
        await user.destroy()
    }
        async updateUser(id,data){
        const user = await User.update(data,{where:{id:id}})
        if(!user){
            return null
        }
    }}

module.exports = new userRepo()