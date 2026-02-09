async function chat() {
  const input = document.getElementById("userInput").value;
  const replyBox = document.getElementById("botReply");

  if (!input.trim()) {
    replyBox.innerText = "Please enter a question.";
    return;
  }

  replyBox.innerText = "Thinking… 🤖";

  try {
    const res = await fetch("/.netlify/functions/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question: input })
    });

    const data = await res.json();
    replyBox.innerText = data.reply || "No response from AI.";
  } catch (err) {
    replyBox.innerText = "AI service error.";
    console.error(err);
  }
}
