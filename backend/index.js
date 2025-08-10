import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import resumeRoutes from "./routes/resumeRoutes.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/api/resume", resumeRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
