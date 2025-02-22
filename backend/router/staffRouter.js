import express from "express"
import { getStaffById, listOfStaff, getStaffByName, addStaff } from "../controller/staffController.js"
import multer from "multer";

const storage = multer.diskStorage({
    filename: (req, file, callBack )=>{
        callBack(null, Date.now()+file.originalname)
    },
    destination: (req, file, callBack)=>{
        callBack(null,"./public/StaffData")
    }
})
const upload = multer({storage})

const router = express.Router()

router.get("/:id", getStaffById);
router.get("/listOfStaff", listOfStaff);
router.get("/staffByName", getStaffByName);
router.post("/addStaff",upload.fields([{name: "photo"},{name: "aadhar"}]),addStaff);
export default router;