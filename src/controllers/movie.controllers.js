import { Movie } from "../models/movie.model.js";
import { successResponse, errorResponse } from "../utils/responsehandler.utils.js";

// to create a new movie
export const createMovie = async (req, res) => {
    try {
        const movie = await Movie.create(req.body);
        return successResponse(res, 201, 'Movie created successfully', movie);
    } catch (error) {
        console.error('Error creating movie:', error);
        return errorResponse(res, 500, 'Internal Server Error', 'An error occurred while creating the movie');
    }
}

// to delete a movie by id
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

// to fetch the movie by id
export const getMovieById = async (req, res) => {
    try {
        const { movieId } = req.params;
        const movie = await Movie.findById(movieId);

        if (!movie) {
            return errorResponse(res, 404, 'Not Found', 'Movie not found');
        }

        return successResponse(res, 200, 'Movie fetched successfully', movie);
    } catch (error) {
        console.error('Error fetching movie by ID:', error);
        return errorResponse(res, 500, 'Internal Server Error', 'An error occurred while fetching the movie');
    }
}