import express from "express"
import { getRegByUserId, getRegList, markVerified, registerForExam, rejectApplication } from "../controller/courseRegistrationController.js"
import { uploadRegistrationDoc } from "../helper/multerConfig.js"

const route = express.Router()

route.post("/register",uploadRegistrationDoc.fields([{name:"studentAadhar"},{name:"fatherAadhar"},{name:"marksheet12"},{name:"marksheetLatest"},{name:"pic"},{name:"incomeCertificate"},{name:"samagraId"}]),registerForExam)
route.get("/getRegList",getRegList);
route.get("/getRegByUserId/:id",getRegByUserId);
route.put("/markVerified/:id",markVerified);
route.put("/rejectApplication/:id",rejectApplication);


export default route