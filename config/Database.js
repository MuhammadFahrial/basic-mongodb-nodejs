import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.MONGODB_CONNECT_URI);
};

export default connectDB;
