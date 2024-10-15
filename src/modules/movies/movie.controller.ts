import { Request, Response } from "express"
import { MovieService } from "./movie.service"

const createMovie = async (req: Request, res: Response) => {

    const movieData = req.body;
    const result = await MovieService.createMovie(movieData);

    res.json ({
        success: true,
        message: "Movie created successfully",
        data: result
    })
}


export const MovieController = {
    createMovie
}