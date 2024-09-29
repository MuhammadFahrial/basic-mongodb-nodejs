import User from "../models/ModelUser.js";

export const getUser = async (req, res) => {
  try {
    const response = await User.find().select("name age");
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    await User.create(req.body);
    res.status(201).json({ msg: "User created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true, runValidators: true }
    );
    if (!updateUser) return res.status(404).json({ msg: "User not found" });
    res.status(200).json({ msg: "User updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleteUser = await User.findByIdAndDelete(req.params.id);
    if (!deleteUser) return res.status(404).json({ msg: "User not found" });
    res.status(200).json({ msg: "User deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
