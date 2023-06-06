import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            "mongodb+srv://fatwa:fatwa00@dashndine.yzreo9r.mongodb.net/?retryWrites=true&w=majority"
        );
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};
