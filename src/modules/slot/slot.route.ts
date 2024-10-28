import express from "express";
import { SlotControllers } from "./slot.controller";
// import { SlotServices } from "./slot.service";

const router = express.Router();

// Create Slot
router.post("/", SlotControllers.createSlots);

// Get all available slots for a service on a specified date . 
router.get("/availability", SlotControllers.getAvailableSlots);

export const SlotRoutes = router;