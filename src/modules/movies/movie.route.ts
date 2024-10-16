import express from "express";
import { MovieControllers } from "./movie.controller";

const router = express.Router();

// define movie routes

// create movie route
router.post("/", MovieControllers.createMovie);

// get all movies route
router.get("/", MovieControllers.getAllMovies);

// get movie by id route
// router.get("/:movieId", MovieControllers.getMovieById);

// get movie by slug route
router.get("/:slug", MovieControllers.getMovieBySlug);

export const MovieRoutes = router;
