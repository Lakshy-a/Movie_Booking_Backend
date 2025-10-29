import express from 'express';
import { createMovie, deleteMovie, getMovieById } from '../controllers/movie.controllers.js';
const MovieRouter = express.Router();

MovieRouter.post('/', createMovie);
MovieRouter.delete('/:movieId', deleteMovie);
MovieRouter.get('/:movieId', getMovieById);

export default MovieRouter;