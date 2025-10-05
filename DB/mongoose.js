import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

// mongoose.connect(process.env.MONGOURL).then(() => {
//     console.log("DB Connection Successful");
// }).catch((err) => {
//     console.log(err.message);
// });
export function connectToDB(){
    try{
        mongoose.connect(process.env.MONGOURL).then(() => {
            console.log("DB Connection Successful");
        }
        ).catch((err) => {
            console.log(err.message);
        })
    }
    catch(err){
        console.log(err.message);
    }
}