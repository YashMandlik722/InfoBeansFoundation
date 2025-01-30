import express from "express"
import { myresult } from "../controller/resultController.js"


const router  =  express.Router()

router.get("/myresult", myresult)

export default router