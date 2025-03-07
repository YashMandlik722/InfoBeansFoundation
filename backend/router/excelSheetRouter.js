import express from "express";
import { generateExcel } from "../controller/excelSheet.js";


const router  =  express.Router();

router.post("/getExcel",generateExcel )


export default router;
