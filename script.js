function chat() {
  const input = document.getElementById("userInput").value.toLowerCase();
  let reply = "Thank you. Our team will contact you soon.";

  if (input.includes("volunteer")) {
    reply = "You can volunteer by filling the form above.";
  } else if (input.includes("help") || input.includes("patient")) {
    reply = "Medical assistance requests are reviewed within 24 hours.";
  }

  document.getElementById("botReply").innerText = reply;
}
