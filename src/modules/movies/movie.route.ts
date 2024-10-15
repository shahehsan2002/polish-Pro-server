import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

// define movie routes

// create movie route
router.post("/", MovieControllers.createMovie);

// get all movies route
router.get("/", MovieControllers.getAllMovies);

export const MovieRoutes = router;
