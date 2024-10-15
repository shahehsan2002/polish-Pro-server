import { model, Schema } from "mongoose";
import { TMovie, TReview } from "./movie.interface";

const reviewSchema = new Schema<TReview>({
  email: {
    type: String,
    required: true,
  },
  ratting: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const movieSchema = new Schema<TMovie>({
  title: {
    type: String,
    required: [true, "Movie title is required"],
  },
  description: {
    type: String,
    required: [true, "Movie description is required"],
  },
  releaseDate: {
    type: Date,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  reviews: [reviewSchema],
  slug: {
    type: String,
  },
  viewCount: {
    type: Number,
    default: 0,
  },
});


export const Movie = model<TMovie>("Movie", movieSchema);