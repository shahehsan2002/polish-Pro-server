import express from "express";
import { ServiceControllers } from "./service.controller";

const router = express.Router();

// Create a new Service
router.post("/", ServiceControllers.createService);

// Get all Services
router.get("/", ServiceControllers.getAllServices);

// Get a single Service by id
router.get("/:id", ServiceControllers.getServiceById);

export const ServiceRoutes = router