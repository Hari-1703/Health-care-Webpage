export async function handler(event) {
  const { question } = JSON.parse(event.body);

  const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text:
                    "You are a professional healthcare NGO assistant. Respond clearly and politely.\n\nUser question: " +
                    question
                }
              ]
            }
          ]
        })
      }
    );

    const data = await res.json();
    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "I couldn't generate a response.";

    return {
      statusCode: 200,
      body: JSON.stringify({ reply })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ reply: "AI service error." })
    };
  }
}
