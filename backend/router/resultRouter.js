import express from "express";
import multer from "multer";
import { bulkResult, getResultById, getResultList } from "../controller/resultController.js";


const router  =  express.Router();
const upload = multer();

router.get("/getResult/:id", getResultById);
router.get("/getResultList", getResultList);
router.post("/bulkResult", upload.single('file'), bulkResult);

export default router;