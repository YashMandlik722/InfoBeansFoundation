import express from "express"
import { getUserById, getUserList, signIn, signUp } from "../controller/userController.js"

const route = express.Router()

route.post("/signIn",signIn);
route.post("/signUp",signUp);
route.get("/getUserList",getUserList);
route.get("/getUser/:id",getUserById);



export default route;