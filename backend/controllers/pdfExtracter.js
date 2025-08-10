import fs from 'fs/promises';
import pdfParse from 'pdf-parse';

export const extractPdfText = async (filePath) => {
  try {
    // 1. Read the PDF file asynchronously
    const dataBuffer = await fs.readFile(filePath);
    console.log(`PDF file read successfully: ${filePath}`);

    // 2. Parse PDF to extract text
    const parsedData = await pdfParse(dataBuffer);

    // 3. Log full parsed object for debugging
    console.log("Parsed PDF object keys:", Object.keys(parsedData));

    // 4. Check and log text content
    if (parsedData.text && parsedData.text.trim().length > 0) {
      console.log("Extracted PDF text:\n", parsedData.text);
    } else {
      console.warn("No text content found in the PDF. It might be scanned or image-based.");
    }

    return parsedData.text || "";
  } catch (error) {
    console.error("Error reading or parsing PDF:", error);
    throw error;
  }
};

// Example usage:
// (async () => {
//   const text = await extractPdfText('./resume.pdf');
//   console.log("Final extracted text length:", text.length);
// })();
