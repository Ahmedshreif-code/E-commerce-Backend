import express from "express";

import { register } from "../controller/auth-controller.js";
import { validate } from "../middlewares/validate.js";
import { userValidation } from "../services/auth-validation.js";

const authRouter = express.Router();

authRouter.route("/register").post(validate(userValidation), register);




export default authRouter;