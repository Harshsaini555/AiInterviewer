import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: "YOUR_OPENAI_API_KEY", // Replace with your actual OpenAI API key
});


export const getAtsScoreFromOpenAI = async (resumeText) => {
  const prompt = `
You are an ATS (Applicant Tracking System).
Score the following resume based on relevance to a software engineer role. 
Return score out of 100, and list 5 suggestions to improve.

Resume:
${resumeText}

Output Format:
{
  "score": number,
  "suggestions": [string]
}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  const answer = response.choices[0].message?.content;
  console.log("OpenAI response:", answer);
  try {
    return JSON.parse(answer || "{}");
  } catch (err) {
    console.error("Failed to parse JSON from OpenAI:", answer);
    throw new Error("Could not parse ATS score output from OpenAI.");
  }
};
