import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";
import { compareAsc, format } from "date-fns";
import slugify from "slugify";

// create movie
const createMovie = async (payload: TMovie) => {
  // title + releaseDate
  // Inception Two 2010-02-16:00:00.000Z
  // inception-two-2010-02-16

  const date = format(payload.releaseDate, "dd-MM-yyyy")

  //   creating slugify
  const slug = slugify(`${payload.title}-${date}}`, {
    lower: true,
  });
    const result = await Movie.create({...payload,  slug });

    return result;
};

// get all movies
const getAllMovies = async () => {
  const result = await Movie.find();
  return result;
};

// get movie by id
const getMovieById = async (id: string) => {
  const result = await Movie.findById(id);
  return result;
};

// get movie by slug
const getMovieBySlug = async (id: string) => {
  const result = await Movie.findById(id);
  return result;
};

export const MovieService = {
  createMovie,
  getAllMovies,
  getMovieById,
  getMovieBySlug,
};
