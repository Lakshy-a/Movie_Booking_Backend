import { Movie } from "../models/movie.model.js";
import { successResponse, errorResponse } from "../utils/responsehandler.utils.js";

export const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        return successResponse(res, 201, 'Movie created successfully', movie);
    } catch (error) {
        console.error('Error creating movie:', error);
        return errorResponse(res, 500, 'Internal Server Error', 'An error occurred while creating the movie');
    }
}

export const deleteMovie = async (req, res) => {
    try {
        const { movieId } = req.params;
        const response = await Movie.findByIdAndDelete(movieId);
        return successResponse(res, 200, 'Movie deleted successfully', response);
    } catch (error) {
        console.error('Error deleting movie:', error);
        return errorResponse(res, 500, 'Internal Server Error', 'An error occurred while deleting the movie');
    }
}
