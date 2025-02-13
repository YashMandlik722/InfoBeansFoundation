import express from "express"
import { getRegByUserId, getRegList, markVerified, registerForExam, rejectApplication, regForPerticularCourse } from "../controller/courseRegistrationController.js"
import { uploadRegistrationDoc } from "../helper/multerConfig.js"

const route = express.Router()

route.post("/register",uploadRegistrationDoc.fields([{name:"aadhar"},{name:"fatherAadhar"},{name:"marksheet12"},{name:"latestMarksheet"},{name:"passportPhoto"},{name:"incomeCertificate"},{name:"samagraId"}]),registerForExam)
route.get("/getRegList",getRegList);
route.get("/getRegByUserId/:id",getRegByUserId);
route.get("/regForPerticularCourse/:courseType",regForPerticularCourse);
route.put("/markVerified/:id",markVerified);
route.put("/rejectApplication/:id",rejectApplication);


export default route