import { model, Schema } from "mongoose";
import { TMovie, TMovieInstanceMethods, TMovieModel, TReview } from "./movie.interface";
import { format } from "date-fns";
import slugify from "slugify";

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

const movieSchema = new Schema<TMovie,TMovieModel,TMovieInstanceMethods>({
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

// using middleware
// movieSchema.pre("save", function (next) {
//   const date = format(this.releaseDate, "dd-MM-yyyy")

//   // create slug
//   this.slug = slugify(`${this.title}-${date}`, {
//     lower: true,
//   });

//     next();
// });


movieSchema.methods("createSlug", function createSlug (payload:TMovie) {
const data 
})



export const Movie = model<TMovie,TMovieModel>("Movie", movieSchema);