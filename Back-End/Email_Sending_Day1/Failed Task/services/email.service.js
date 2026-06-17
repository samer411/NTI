const transporter = require("../config/email.config")
exports.sendemailwelcome = async(email,name)=>{
    console.log(email)
    await transporter.sendMail({

        from:"ntiapp",
        to:email,
        subject:"Welcome",
        html:`<h1>hello ${name}.</h1>`

    })
}
exports.sendverifymail=async(email,token)=>{
    const link = `http://localhost:3000/auth/verify/${token}`
    await transporter.sendMail({
        from:"ntiapp_samer.nassim.behery@gmail.com",
        to:email,
        subject:"Verify Mail",
        html:`<a href=${link}>verfiy your email</a>`
    })
}