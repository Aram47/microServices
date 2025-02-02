import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './src/config/db.js';
import router from './src/routes/route.js';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 4002;

app.use(express.json());
app.use(cors());

app.use('/service3', router);

app.listen(port, () => {
    console.log(`Server3 listen on PORT: ${port}`);
});