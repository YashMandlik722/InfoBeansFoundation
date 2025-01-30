import express from "express"
import { signIn, signUp } from "../controller/userController.js"

const route = express.Router()

route.post("/signIn",signIn);
route.post("/signUp",signUp);



export default route;