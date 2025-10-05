import Joi from "joi";

export let userValidation=Joi.object({
    firstName:Joi.string().min(3).max(25).required(),
    lastName:Joi.string().min(3).max(25).required(),
    userName:Joi.string().min(3).max(50).optional(),
    email:Joi.string().email().min(3).max(25).required(),
    password:Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    profileImage:Joi.string().required(),
    role:Joi.string().optional(),
})