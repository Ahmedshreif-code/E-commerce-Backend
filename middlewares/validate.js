import { Schema } from "mongoose";

export const validate=(Schema)=>{
    return (req,res,next)=>{
        console.log(req.body);

        const inputs={...req.body,...req.params,...req.query};
        const {error}=Schema.validate(inputs,{abortEarly:false});
       // console.log(error);
        if(error){
            const errors=error.details.map((detail)=>{
                message:detail.message;
                field: detail.path.join(".");
            });
        }
        next();
    }
}

