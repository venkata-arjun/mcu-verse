import express from "express";
import { authMiddleware } from "../middleware/auth_middleware.js";
import User from "../models/user_model.js";

const router = express.Router();

router.get("/", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);
  res.json(user.favorites);
});

router.post("/", authMiddleware, async (req, res) => {
  const { itemId, type } = req.body;

  const user = await User.findById(req.user.id);

  const exists = user.favorites.find(
    (f) => f.itemId === itemId && f.type === type
  );

  if (exists) {
    return res.status(400).json({ message: "Already favorited" });
  }

  user.favorites.push({ itemId, type });
  await user.save();

  res.json(user.favorites);
});

router.delete("/:itemId", authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.id);

  user.favorites = user.favorites.filter((f) => f.itemId !== req.params.itemId);

  await user.save();
  res.json(user.favorites);
});

export default router;
