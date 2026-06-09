const joi = require("joi");
const createPostValidate = joi.object({
    userId:joi.string().required(),
  title: joi.string().min(3).max(10).required().messages({
    "string.min": "title must be 3 characters at least",
    "any.required": "title is required",
  }),
  body: joi.string().min(3).required().messages({
    "string.min": "body must be 3 characters at least",
    "any.required": "body is required",
  }),
});
module.exports=createPostValidate