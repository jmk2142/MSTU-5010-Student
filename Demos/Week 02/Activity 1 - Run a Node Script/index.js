function respondToInput(input) {
  const text = (input || "").trim().toLowerCase();
  const greetings = new Set(["hello", "hi", "hey"]);

  if (greetings.has(text)) return "goodbye!";
  return "Not in the mood to greet me today?";
}

const input = process.argv[2];
console.log(respondToInput(input));

