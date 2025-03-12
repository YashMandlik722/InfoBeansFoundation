import express from "express"
import { getStaffById, listOfStaff, getStaffByName, addStaff, editStaff } from "../controller/staffController.js"
import multer from "multer";

const storage = multer.diskStorage({
    filename: (req, file, callBack )=>{
        callBack(null, Date.now()+file.originalname)
    },
    destination: (req, file, callBack)=>{
        callBack(null,"./public/staffDoc")
    }
})
const upload = multer({storage})

const router = express.Router()

router.get("/:id", getStaffById);
router.get("/listOfStaff", listOfStaff);
router.get("/staffByName", getStaffByName);
//For Multer
// router.post("/addStaff",upload.fields([{name: "photo"},{name: "aadhar"}]),addStaff);

//For Cloudinary
router.post("/addStaff",addStaff);
router.patch("/edit-staff/:staffId", editStaff);

export default router;