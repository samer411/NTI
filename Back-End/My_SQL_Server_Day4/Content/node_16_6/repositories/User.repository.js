const{User}=require('../models')

class userrepo{
    async getallusers(){
        return await User.findAll()
        
    }
    async getuserbyid(id){
        return await User.findByPK(id)
    }
    async createuser(data){
        return await User.create(data)

    }
    async deleteuser(id){
        const user= await User.findByPK(id)
        if(!user) return null
        await user.destroy()
    }
    
}
module.exports=new userrepo()
