import { TMovie } from "./movie.interface"; // Movie type interface
import { Movie } from "./movie.model"; // Movie Mongoose model
import slugify from "slugify"; // You need to install slugify if you haven't already
import { format } from "date-fns"; // You can install date-fns for formatting dates

// Way 1: Using business logic for slug creation
const createMovie = async (payload: TMovie) => {
  // Formatting the release date
  const formattedDate = format(new Date(payload.releaseDate), "yyyy-MM-dd");

  // Creating slug using title and release date, making the title lowercase and replacing spaces
  const slug = slugify(`${payload.title}-${formattedDate}`, {
    lower: true, // Ensures that the slug is all lowercase
    strict: true, // Removes special characters
  });

  // Assign the slug to the payload
  const moviePayload = { ...payload, slug };

  // Create and save the movie in the database
  const result = await Movie.create(moviePayload);
  return result;
};

// Way 2: Using instance method for slug creation
// In this approach, assume that the `createSlug` method is implemented inside the Movie model.
const createMovieWithInstanceMethod = async (payload: TMovie) => {
  const movie = new Movie(payload); // Create a new Movie instance

  // Call the instance method to generate the slug based on the model's logic
  const slug = movie.createSlug(payload); // Assuming `createSlug` is defined in the model

  movie.slug = slug; // Set the slug to the instance
  await movie.save(); // Save the movie to the database

  return movie;
};

// Fetch all movies from the database
const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

// Fetch a single movie by its slug
const getMovieBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};

// Export the service functions
export const MovieServices = {
  createMovie, // Using business logic slug creation
  createMovieWithInstanceMethod, // Optional, if you prefer instance method slug creation
  getAllMovies,
  getMovieBySlug,
};
