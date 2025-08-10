import fs from "fs";
import textract from "textract";
import { getAtsScoreFromOpenAI } from "../services/atsScoringService.js";
import { extractPdfText } from "./pdfExtracter.js"; // <-- Import the new PDF extractor

export const parseResumeAndScore = async (req, res) => {
  try {
    const file = req.file;
    if (!file) return res.status(400).json({ error: "No file uploaded" });

    const filePath = file.path;
    let resumeText = "";

    if (file.mimetype === "application/pdf") {
      // Use the new async PDF extractor
      resumeText = await extractPdfText(filePath);
    } else {
      // Fallback for non-PDF files
      resumeText = await new Promise((resolve, reject) => {
        textract.fromFileWithPath(filePath, (error, text) => {
          if (error) reject(error);
          else resolve(text || "");
        });
      });
    }

    console.log("Parsed resume text length:", resumeText?.length);
    console.log(resumeText)
    if (!resumeText) {
      return res.status(400).json({ error: "Could not extract text from resume" });
    }

    const atsResult = await getAtsScoreFromOpenAI(resumeText);

    res.json({ atsResult, resumeText });
    fs.unlinkSync(filePath); // Clean up uploaded file
  } catch (err) {
    console.error("Error parsing resume", err);
    res.status(500).json({ error: "Failed to parse resume" });
  }
};
