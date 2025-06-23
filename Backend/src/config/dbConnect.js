import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";

const Connect = async () => {
  try {
    console.log("> Connecting To Database...");
    await mongoose.connect(MONGO_URI);
    console.log("> Database is Connected.");
  } catch (e) {
    console.error(`> Error : ${e.message}\n`);
    process.exit(1);
  }
};

mongoose.connection.on("disconnected", () => {
    console.warn("> MongoDB disconnected.");
});

mongoose.connection.on("error", (err) => {
  console.error("> MongoDB connection error:", err);
});

export default Connect;
