import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(proccess.env.MONGODB_CONNECT_URI);
};

export default connectDB;
