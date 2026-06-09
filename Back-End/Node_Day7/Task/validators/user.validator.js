const joi = require('joi')
const registerValidate = joi.object({
    name:joi.string().min(3).required().messages({
        "string.min":"name must be 3 characters at least",
        "any.required":"name is required"
    }),
    email:joi.string().email().required().messages({
        'string.email':"invalid email",
        'any.required':'email is required'
    }),
    role:joi.string().valid('dev','user','admin').default('user'),
    password:joi.string().min(6).max(14).required(),
    confirmPassword:joi.string().required().valid(joi.ref('password')),
    age:joi.number().integer()

});


const loginValidate = joi.object({
    name:joi.string().min(3).required().messages({
        "string.min":"name must be 3 characters at least",
        "nay.required":"name is required"
    }),
    email:joi.string().email().required().messages({
        'string.email':"invalid email",
        'any.required':'email is required'
    }),
 })
module.exports = {registerValidate,loginValidate}