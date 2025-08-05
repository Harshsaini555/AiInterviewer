import express from "express";
import multer from "multer";
import { parseResumeAndScore } from "../controllers/resumeController.js";

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", upload.single("resume"), parseResumeAndScore);

export default router;
