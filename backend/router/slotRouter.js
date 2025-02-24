import express from "express";
import { assignSlot, deletSlots, getActiveSlot, getAllSlot, updateSlots } from "../controller/slotController.js";


const router  =  express.Router();

router.post("/assignSlot",assignSlot);
router.get("/getAllSlots",getAllSlot)
router.get("/getActiveSlots",getActiveSlot)
router.post("/deletSlots",deletSlots,getAllSlot);
router.patch("/updateSlots",updateSlots,getAllSlot);

export default router;
