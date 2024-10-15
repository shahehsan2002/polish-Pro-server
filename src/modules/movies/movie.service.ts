import { TMovie } from "./movie.interface";
import { Movie } from "./movie.model";

const createMovie = async (payload: TMovie) => {
    const result = await Movie.create(payload
    );
    return result;
};

const getAllMovies = async () =>{
    const result = await Movie.find();
    return result;
}


export const MovieService = {
    createMovie,
    getAllMovies,
}