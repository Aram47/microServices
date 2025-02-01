import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 4001;

app.listen(port, () => {
    console.log(`Server listen on PORT: ${port}`);
});