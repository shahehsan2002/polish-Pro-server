import express from "express";
import { SlotControllers } from "./slot.controller";
// import { SlotServices } from "./slot.service";

const router = express.Router();

// Create Slot
router.post("/", SlotControllers.createSlots);

export const SlotRoutes = router;