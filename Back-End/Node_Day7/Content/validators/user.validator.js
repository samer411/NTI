const joi = require("joi");

const userValidate = joi.object({
  name: joi.string().min(3).required().message({
    "string.min": "name must be 3 characters at least",
    "any.required": "name is required",
  }),
  email:joi.string().email().required().message({
    'string.email':'invalid email',
    'any.required':'email is required'
  }),
  role:joi.string().valid('dev','user','admin').default('user'),
  password:joi.string().min(6).max(14).required(),
  confirmPassword:joi.string().required().valid(joi.ref('password')),
  age:joi.number().integer()
});
//there is something called dto {data transfer object} like in the front and back the same object in the field
module.exports=userValidate
// uservalidatiion.validate(req.body)
