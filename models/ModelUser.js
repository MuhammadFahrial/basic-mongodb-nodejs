import mongoose from "mongoose";

const User = mongoose.Schema({
  name: { type: String, required: true },
  age: String,
});

export default mongoose.model("User", User);
