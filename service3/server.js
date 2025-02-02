import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 4002;

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.log(`Server listen on PORT: ${port}`);
});