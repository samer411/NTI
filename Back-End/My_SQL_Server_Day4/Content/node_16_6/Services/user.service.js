const userrepo=require('../repositories/User.repository')
// const {userrepo}=require('../repositories')

class userservice{
    async getall(){
        return  await userrepo.getallusers()
    }
    async getbyid(id){
        return await userrepo.getuserbyid()
    }
    async create(data){
        return await userrepo.createuser(data)
    }
    async delete(id){
        return  await userrepo.delete(id)
    }

}
module.exports=new userservice()