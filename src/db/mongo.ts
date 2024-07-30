import mongoose from "mongoose";

class MongoDB {
    public static connect = async (): Promise<void> => {
        // Get the MongoDB connection string from environment variables
        const stringConnectionMongo = process.env["mongoDB_String"];

        if (!stringConnectionMongo) {
            throw new Error("MongoDB connection string is not defined in environment variables");
        }

        // Configure mongoose options
        mongoose.set('strictQuery', false);

        // Connect to MongoDB
        try {
            await mongoose.connect(stringConnectionMongo);
            console.log("MongoDB connected successfully");
        } catch (error) {
            console.error("MongoDB connection error: ", error);
            throw new Error("MongoDB connection error: " + error);
        }
    }
}

export default MongoDB;