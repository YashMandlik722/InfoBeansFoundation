import express from "express";
import multer from "multer";
import { imagepost, getimage } from "../controller/galleryController.js";

const router = express.Router();


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });


router.post("/imagepost", upload.single("file"), imagepost);


router.get("/getimage", getimage);

export default router;
