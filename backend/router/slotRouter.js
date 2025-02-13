import express from "express";
import { assignSlot } from "../controller/slotController.js";


const router  =  express.Router();

router.post("/assignSlot",assignSlot);

export default router;