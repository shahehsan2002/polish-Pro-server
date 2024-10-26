import express from "express";
import { ServiceControllers } from "./service.controller";

const router = express.Router();

// Create a new Service
router.post("/", ServiceControllers.createService);

// Get all Services
router.get("/", ServiceControllers.getAllServices);

// Get a single Service by id
router.get("/:id", ServiceControllers.getServiceById);

// Update a Service
router.put("/:id", ServiceControllers.updateService);

// Delete a Service
router.delete("/:id", ServiceControllers.deleteService);

export const ServiceRoutes = router;
