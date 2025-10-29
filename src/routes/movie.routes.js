import express from 'express';
import { createMovie } from '../controllers/movie.controllers.js';
const MovieRouter = express.Router();

MovieRouter.post('/', createMovie);

export default MovieRouter;