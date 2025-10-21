import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.config.js';

dotenv.config();

export const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    connectDB();
});

