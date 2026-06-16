const {User} = require("../models/user")

class userRepo {
    async getAllUser(){
        return await User.findAll()
    }
    async getUser(){
        return await User.findByPK(id)
    }
    async createUser(data){
        return await User.create(data)
    }
    async deleteUser(id){
        const user = await User.findByPK(id)
        if(!user){
            return null
        }
        await user.destroy()
    }
}

module.exports = new userRepo()