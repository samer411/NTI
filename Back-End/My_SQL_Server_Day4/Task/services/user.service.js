const userRepo = require("../repositories/User.repository")
class userService{
    async getAll(){
        return userRepo.getAllUsers()
    }
    async create(data){
        return await userRepo.createUser(data)
    }
    async delete(id){
        return await userRepo.deleteUser(id)
    }
    async getById (id){
        return await userRepo.getUser(id)
    }
    async update(id,data){
        return await userRepo.updateUser(id,data)
    }
}

module.exports = new userService()