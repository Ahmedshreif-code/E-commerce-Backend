// Req ==> Express ==> DB     MongoDB ===> No SQL
// Routes ==> URL
// models ==> password, email, name
// controllers 
// middleware ==> authentication, authorization
// config
//DB
// 1.index.js
// 2.DB/mongoose.js
// 3.routes
// 4.middleware
// 5.services
// 6.controller
// 7.models
////////////////////////////////////////////////////////////////////////////////
import express from 'express';
import dotenv from 'dotenv';
import { connectToDB } from './DB/mongoose.js';
import  authRouter   from './routes/auth-routes.js';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';





// use packages:

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;


// use middlewares:
app.use(express.json());
app.use(morgan('dev'));
app.use(cookieParser())

app.use("/auth", authRouter);




connectToDB();
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

