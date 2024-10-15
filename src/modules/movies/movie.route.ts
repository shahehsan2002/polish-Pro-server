import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

// define movie routes

// create movie route
router.post("/", MovieControllers.createMovie);

export const MovieRoutes = router;
