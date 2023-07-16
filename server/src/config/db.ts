import mongoose from "mongoose";

export default async () => {
    try {
        mongoose.connect( process.env.MONGO_URI as string )
        console.log('MongoDB connected...');
    } catch (error) {
        console.log(error);
    }
}