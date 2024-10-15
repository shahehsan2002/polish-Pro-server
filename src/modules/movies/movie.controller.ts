import { Request, Response } from "express"
import { MovieService } from "./movie.service"

// create movie
const createMovie = async (req: Request, res: Response) => {

    const movieData = req.body;
    const result = await MovieService.createMovie(movieData);

    res.json ({
        success: true,
        message: "Movie created successfully",
        data: result
    })
}

// get all movies
const getAllMovies = async (req: Request, res: Response) => {
    try{
        const result = await MovieService.getAllMovies();
        res.status(200).json({
            success: true,
            message: "Movies fetched successfully",
            data: result
        })
    }catch(err){
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            error: err
        })
    }
}


export const MovieControllers= {
    createMovie,
    getAllMovies
}