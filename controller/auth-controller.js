import User from "../models/user-model.js";
import asyncHandler from "express-async-handler";


export const register=asyncHandler(async(req,res)=>{
    const data =req.body;
    res.status(200).json(data)

})
