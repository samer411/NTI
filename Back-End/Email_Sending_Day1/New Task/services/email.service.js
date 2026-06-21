const transporter = require("../config/email.config")
exports.sendemailwelcome = async(email,name)=>{
    await transporter.sendMail({
        from:"nti",
        to:email,
        subject:"Welcome",
        html:`<h2>Hello ${name}</h2>`
    })
}