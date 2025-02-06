import express from "express"
import { getStaffById, listOfStaff, getStaffByName } from "../controller/staffController.js"

const router = express.Router()

router.get("/:id", getStaffById);
router.get("/listOfStaff", listOfStaff);
router.get("/staffByName", getStaffByName);

export default router;