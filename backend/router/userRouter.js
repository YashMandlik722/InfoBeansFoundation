import express from "express"
import { signIn } from "../controller/userController.js"

const route = express.Router()

route.get("/signin",signIn)


export default route