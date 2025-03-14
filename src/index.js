import express from "express";
import mongoose from "mongoose";
import { userRouter } from "./routers/user.router.js";
import { orderRouter } from "./routers/Order.router.js";
import { FoodRouter } from "./routers/Food.router.js";
import { categoryRouter } from "./routers/category.router.js";
import { items } from "./routers/items.router.js";
import dotenv from "dotenv";

dotenv.config();

import cors from "cors";

// const mongoURI =
// "mongodb+srv://tuvshee894:pMGouSOSywNnqc7d@cluster0.vds8d.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0";

const mongoURI = process.env.DATA_BASE_CONNECT_URL;

const connectDb = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Successfully connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

connectDb();

const app = express();
const port = 4000;

app.use(express.json());
app.use(cors());
app.use("/food", FoodRouter);
app.use("/order", orderRouter);
app.use("/user", userRouter);
app.use("/category", categoryRouter);
app.use("/items", items);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
