function parseArgs(args) {
  // TODO (Activity 2): implement --prompt and --debug parsing
  // Expected shape: { prompt: string, debug: boolean }
  return { prompt: "", debug: false };
}

function respondToInput(input) {
  const text = (input || "").trim().toLowerCase();
  const greetings = new Set(["hello", "hi", "hey"]);

  if (greetings.has(text)) return "goodbye!";
  return "Not in the mood to greet me today?";
}

function buildRequest({ prompt }) {
  // TODO (Activity 2): return an object shaped like an LLM request payload
  // Example keys: model, messages, temperature
  return { model: "demo-model", messages: [], temperature: 0.7, prompt };
}

function buildResponse({ assistantText }) {
  // TODO (Activity 2): return an object shaped like an LLM response payload
  // Example path students should be able to read: choices[0].message.content
  return { choices: [{ message: { content: assistantText } }] };
}

function main() {
  const { prompt, debug } = parseArgs(process.argv.slice(2));

  if (!prompt) {
    console.log('Usage: node index.js --prompt "hello" [--debug]');
    process.exit(1);
  }

  const request = buildRequest({ prompt });
  const assistantText = respondToInput(prompt);
  const response = buildResponse({ assistantText });

  if (debug) {
    console.log("REQUEST JSON:");
    console.log(JSON.stringify(request, null, 2));
    console.log("RESPONSE JSON:");
    console.log(JSON.stringify(response, null, 2));
  } else {
    console.log(assistantText);
  }
}

main();

