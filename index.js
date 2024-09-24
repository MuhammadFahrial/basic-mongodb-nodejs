import express from "express";
import mongoose from "mongoose";
import connectDB from "./config/Database.js";
import userRoute from "./routes/UserRoutes.js";
import cors from "cors";

const app = express();
connectDB();
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(5000, () => {
  try {
    console.log("Server up and running...");
  } catch (error) {
    console.log(error.message);
  }
});
