import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({path:"../.env"});

console.log("Mongo URL:", process.env.MONGOURL); // Debugging line to check if MONGOURL is loaded correctly

mongoose.connect(process.env.MONGOURL).then(() => {
    console.log("DB Connection Successful");
}).catch((err) => {
    console.log(err.message);
});
