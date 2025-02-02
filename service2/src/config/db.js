import mongoose from 'mongoose';

export default async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Service2 MongoDB Connected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};