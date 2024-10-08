import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/Database.js";
import userRoute from "./routes/UserRoutes.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connectDB();
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(userRoute);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  try {
    console.log("Server up and running " + PORT);
  } catch (error) {
    console.log(error.message);
  }
});
