import express from 'express';
import dotenv from 'dotenv';
import mongoose, { mongo } from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, async () => {
    console.log(`Server is running on http://localhost:${PORT}`);

    await mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch(err => {
            console.error('Failed to connect to MongoDB', err);
        });
});