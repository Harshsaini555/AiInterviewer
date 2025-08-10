import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: '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',
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
