import { Model } from "mongoose";

export type TReview = {
  email: string;
  ratting: number;
  comment: string;
};

export type TMovie = {
  title: string;
  description: string;
  releaseDate: Date;
  genre: string;
  reviews: [TReview];
  slug: string;
  viewCount: number;
  isDeleted: boolean;
};

// Put all user instance methods in this interface:
 export type TMovieInstanceMethods = {
  createSlug(payload: TMovie): string;
};

export type TMovieModel = Model<TMovie, Record<string, unknown>, TMovieInstanceMethods>;