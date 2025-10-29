import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.config.js';

import { Movie } from './models/movie.model.js';

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    connectDB();

    // await Movie.create(
    //     {
    //         name: "Inception",
    //         description: "A skilled thief is offered a chance to have his past crimes erased if he can implant an idea into a target's subconscious.",
    //         casts: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
    //         tarilerUrl: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    //         language: "English",
    //         releaseDate: new Date("2010-07-16"),
    //         director: "Christopher Nolan",
    //         releaseStatus: "RELEASED"
    //     }
    // )
});

