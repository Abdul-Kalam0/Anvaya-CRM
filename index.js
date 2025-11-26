import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

import leadRoutes from "./routes/leadRoutes.js";

//lead routes
app.use("/", leadRoutes);

//sales routes
app.use("/", salesRoutes);

export default app;
