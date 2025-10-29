import express from 'express';
import { createMovie, deleteMovie } from '../controllers/movie.controllers.js';
const MovieRouter = express.Router();

MovieRouter.post('/', createMovie);
MovieRouter.delete('/:movieId', deleteMovie);

export default MovieRouter;