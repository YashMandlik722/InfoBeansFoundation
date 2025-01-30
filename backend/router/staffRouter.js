import express from "express"
import { staffDetails } from "../controller/staffController.js"

const router  =  express.Router()

router.get("/staffDetails", staffDetails)

export default router;