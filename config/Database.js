import mongoose from "mongoose";

const url = "mongodb://localhost:27017/fullstack-db";

const connectDB = async () => {
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

export default connectDB;
