function parseArgs(args) {
  const result = {
    debug: false,
    dryRun: false,
    prompt: "",
    system: "You are a helpful assistant.",
    temperature: 0.7,
  };

  for (let i = 0; i < args.length; i++) {
    const a = args[i];
    if (a === "--debug") result.debug = true;
    if (a === "--dry-run") result.dryRun = true;
    if (a === "--prompt") result.prompt = args[i + 1] || "";
    if (a === "--system") result.system = args[i + 1] || result.system;
    if (a === "--temperature") {
      const value = Number(args[i + 1]);
      if (Number.isFinite(value)) result.temperature = value;
    }
  }

  return result;
}

function buildRequest({ model, system, prompt, temperature }) {
  return {
    model,
    messages: [
      { role: "system", content: system },
      { role: "user", content: prompt },
    ],
    temperature,
  };
}

async function postChatCompletion({ apiBase, request }) {
  const url = `${apiBase}/chat/completions`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  const text = await res.text();
  let data;
  try {
    data = JSON.parse(text);
  } catch {
    data = { raw: text };
  }

  if (!res.ok) {
    const message = typeof data?.error?.message === "string" ? data.error.message : "Request failed";
    const err = new Error(`${message} (HTTP ${res.status})`);
    err.data = data;
    throw err;
  }

  return data;
}

function normalizeApiBase(rawBaseUrl) {
  const base = (rawBaseUrl || "").trim().replace(/\/$/, "");
  if (!base) return "";
  return base.endsWith("/v1") ? base : `${base}/v1`;
}

function getAssistantText(responseJson) {
  return responseJson?.choices?.[0]?.message?.content || "";
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.prompt) {
    console.log('Usage: node index.js --prompt "Hello" [--system "..."] [--temperature 0.7] [--debug] [--dry-run]');
    process.exit(1);
  }

  const rawBaseUrl = process.env.BASE_URL || "http://localhost:1234";
  const apiBase = normalizeApiBase(rawBaseUrl);
  const model = process.env.MODEL || "MODEL_NOT_SET";

  const request = buildRequest({
    model,
    system: args.system,
    prompt: args.prompt,
    temperature: args.temperature,
  });

  if (args.debug || args.dryRun) {
    console.log("REQUEST JSON:");
    console.log(JSON.stringify(request, null, 2));
  }

  if (args.dryRun) return;

  if (model === "MODEL_NOT_SET") {
    console.error('To actually call LM Studio, set MODEL. Example: MODEL="<MODEL_NAME>" node index.js --prompt "Hello"');
    process.exit(1);
  }

  const response = await postChatCompletion({ apiBase, request });

  if (args.debug) {
    console.log("RESPONSE JSON:");
    console.log(JSON.stringify(response, null, 2));
  }

  const text = getAssistantText(response);
  if (!text) {
    console.error("No assistant text found at choices[0].message.content");
    process.exit(1);
  }

  console.log(text);
}

main().catch((err) => {
  console.error(err?.message || err);
  if (err?.data) {
    console.error("ERROR JSON:");
    console.error(JSON.stringify(err.data, null, 2));
  }
  process.exit(1);
});

