import mongoose from "mongoose";

const url =
  "mongodb+srv://andimuhammadfahrials:hCCJTxnAcG23TUwY@cluster0.4djuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
  await mongoose.connect(url);
};

export default connectDB;
