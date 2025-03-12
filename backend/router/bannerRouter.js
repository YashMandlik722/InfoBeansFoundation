import exp from "express";
import {activeUnactive, addBanner, allBanner, deleteBanner} from "../controller/bannerController.js"
import multer from "multer";

const storage = multer.diskStorage({
    
    filename: (req, file, callBack )=>{
        callBack(null, Date.now()+"BANNER"+file.originalname)
    },
    destination: (req, file, callBack)=>{
        callBack(null,"./public")
    }
})
const upload = multer({storage})

const router = exp.Router();

router.get("/getAll", allBanner);
router.post("/addBanner",upload.fields([{name: "image"}]), addBanner);
router.patch("/updateStatus",activeUnactive);
router.delete("/deleteBanner", deleteBanner);

export default router;