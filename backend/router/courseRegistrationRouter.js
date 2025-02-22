import express from "express"
import { getRegByUserId, getRegList, markVerified, registerForExam, rejectApplication, regForPerticularCourse } from "../controller/courseRegistrationController.js"
import { uploadRegistrationDoc } from "../helper/multerConfig.js"

const route = express.Router()

route.post("/register",uploadRegistrationDoc.fields([{name:"aadhar",maxCount: 1},{name:"fatherAadhar",maxCount: 1},{name:"marksheet12",maxCount: 1},{name:"latestMarksheet",maxCount: 1},{name:"passportPhoto",maxCount: 1},{name:"incomeCertificate",maxCount: 1},{name:"samagraId",maxCount: 1}]),registerForExam)
route.get("/getRegList",getRegList);
route.get("/getRegByUserId/:id",getRegByUserId);
route.get("/regForPerticularCourse/:courseType",regForPerticularCourse);
route.put("/markVerified/:id",markVerified);
route.put("/rejectApplication/:id",rejectApplication);


export default route