import express from "express";
import multer from "multer";
import { bulkResult, myresult } from "../controller/resultController.js";


const router  =  express.Router();
const upload = multer();

router.get("/myresult", myresult);
router.post("/bulkResult", upload.single('file'), bulkResult);

export default router;