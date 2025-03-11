import exp from "express";
import {activeUnactive, addBanner, allBanner, deleteBanner} from "../controller/bannerController.js"
const router = exp.Router();

router.get("/getAll", allBanner);
router.post("/addBanner", addBanner);
router.patch("/updateStatus",activeUnactive);
router.delete("/deleteBanner", deleteBanner);

export default router;