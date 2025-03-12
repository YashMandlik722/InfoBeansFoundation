import express from "express";
import multer from "multer";
import { imagepost, getimage } from "../controller/galleryController.js";

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/galleryImg/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

//For Multer
// router.post("/imagepost", upload.single("file"), imagepost);

//For Cloudinary
router.post("/imagepost", imagepost);


router.get("/getimage", getimage);

export default router;
