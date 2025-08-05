import fs from "fs";
import pdfParse from "pdf-parse";
import textract from "textract";
import { getAtsScoreFromOpenAI } from "../services/atsScoringService.js";

export const parseResumeAndScore = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = file.path;
    let resumeText = "";

    if (file.mimetype === "application/pdf") {
      const dataBuffer = fs.readFileSync(filePath);
      const data = await pdfParse(dataBuffer);
      resumeText = data.text;
    } else {
      resumeText = await new Promise<string>((resolve, reject) => {
        textract.fromFileWithPath(filePath, (error, text) => {
          if (error) reject(error);
          else resolve(text || "");
        });
      });
    }

    const atsResult = await getAtsScoreFromOpenAI(resumeText);

    res.json({ atsResult, resumeText });
    fs.unlinkSync(filePath); // Clean up
  } catch (err) {
    console.error("Error parsing resume", err);
    res.status(500).json({ error: "Failed to parse resume" });
  }
};
