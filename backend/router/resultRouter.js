import express from "express";
import multer from "multer";
import { bulkResult, getResultById, getResultByUserId, getResultList, resultMarking } from "../controller/resultController.js";


const router  =  express.Router();
const upload = multer();

router.get("/getResult/:id", getResultById);
router.get("/getResultByUserId/:id", getResultByUserId);
router.get("/getResultList", getResultList);
router.post("/bulkResult", upload.single('file'), bulkResult);
router.post("/writtenResult", upload.single('file'), resultMarking);

export default router;