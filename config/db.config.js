import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnection = async () => {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("🤝Successfully connected to DB"))
    .catch((error) => console.error("Error connecting DB", error));
};

export default dbConnection;
