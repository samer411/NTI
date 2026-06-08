const userRepository = require("../repositories/user.repositery")

async function getAllUsers(){
    return await userRepository.findAll()
    //logic

}

async function getUserById(id){
    return await userRepository.findById(id)
    //logic
}

module.exports = {getAllUsers,getUserById}