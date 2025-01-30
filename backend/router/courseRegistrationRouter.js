import express from "express"
import { course } from "../controller/courseRegistrationController.js"


const route = express.Router()

route.get("/course",course)


export default route