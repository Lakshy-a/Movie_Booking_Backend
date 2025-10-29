import { app } from "./app.js";
import movieRoutes from './routes/movie.routes.js';

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use('/mbs/api/v1/movies', movieRoutes)