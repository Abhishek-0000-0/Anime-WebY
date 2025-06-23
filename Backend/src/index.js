import dotenv from "dotenv";
dotenv.config(); 

import app from "./app.js";
import connectDB from "./config/dbConnect.js";

const PORT = process.env.PORT || 3000;

const Start = async () => {
  try {
    console.log("> Initializing server...");

    await connectDB();

    app.listen(PORT, () => {
      console.log(`> Server running at: http://localhost:${PORT}`);
    });

  } catch (error) {
    console.error("> Failed to start server:", error.message);
    process.exit(1);
  }
};

Start();
