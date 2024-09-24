import express from "express";
import {
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/UserControllers.js";

const router = express.Router();

router.get("/", getUser);
router.post("/users", createUser);
router.patch("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;
