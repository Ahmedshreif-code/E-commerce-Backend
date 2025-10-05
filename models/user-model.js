import mongoose from "mongoose";


const userModel=new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
    },
    lastName:{
        type:String,
        trim:true,
    },
    userName:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        trim:true,
    },
    profileImage:{
        type:String,
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user",
    },

    
},
{
    timestamps:true,  // dates of creation and update
    collection:"user"
}

)

const User=mongoose.model("User",userModel);
export default User;