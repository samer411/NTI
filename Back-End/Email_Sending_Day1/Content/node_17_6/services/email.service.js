const transporter = require('../config/email.config')

exports.sendemailwelcome=async(email,name)=>{
    await transporter.sendMail({
        from:"ntiapp",
        to:email,
        subject:"WELcome",
        html:`<h2>hello ${name}</h2>`
    })
}
exports.sendverifymail=async(email,token)=>{
    const link = `http://localhost:3000/auth/verify/${token}`
    await transporter.sendMail({
        from:"nti",
        to:email,
        subject:"verify email",
        html:`<a href=${link}>verify your email</a>`
    })
}
exports.resetpassword=async(email,token)=>{
    const link=`http://localhost:3000/auth/reset/${token}`
    await transporter.sendMail({
        from: "nti",
        to:email,
        subject:"reset password",
        html:`<a href=${link}>reset password</a>`
    })
}