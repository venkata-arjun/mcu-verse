import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import passport from "passport";

import { setupPassport } from "./config/passport_config.js";
import { connectDB } from "./config/db_config.js";

import authRoutes from "./routes/auth_routes.js";
import favoriteRoutes from "./routes/favorites_routes.js";

dotenv.config();
connectDB();

const app = express();

// Trust proxy for correct protocol/header handling (required for OAuth/cookies on Render)
app.set("trust proxy", 1);

// Core middleware
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

// Passport
setupPassport();
app.use(passport.initialize());

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/favorites", favoriteRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
