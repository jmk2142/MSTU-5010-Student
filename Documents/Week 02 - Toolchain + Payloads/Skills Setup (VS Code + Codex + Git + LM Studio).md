# Week 02 — Skills Setup (VS Code + Codex + Git + LM Studio)

This week is about getting a complete “making loop” running on your computer:

1) Write code in VS Code  
2) Use Codex (in VS Code) to help you build/debug  
3) Run a local model in LM Studio  
4) Send a request (JSON) → receive a response (JSON)  
5) Use Git + GitHub to submit work (fork + PR)

---

## Green Checks (quick verification)

In VS Code → `Terminal → New Terminal`, run:

- `node -v` (goal: **v18+**)
- `npm -v`
- `git --version`

If any of these commands fail, do the relevant install steps below.

---

## 1) VS Code (baseline)

- Install VS Code: https://code.visualstudio.com/
- Open a folder (not just a file): `File → Open Folder…`
- Open the terminal: `Terminal → New Terminal`

Tip: When you run commands, the terminal usually runs them **inside the folder you opened**.

---

## 2) Node.js (required)

We’ll use Node because it’s cross-platform and your prior course used JavaScript.

### Install
- macOS / Windows: https://nodejs.org/ (download the **LTS** installer)

### Verify
- `node -v` should show `v18.x` or higher.

If you’re below Node 18: update Node before continuing (Node 18+ includes built-in `fetch`).

---

## 3) VS Code extensions (recommended)

Open Extensions (`Cmd+Shift+X` on macOS / `Ctrl+Shift+X` on Windows) and install:

- **ChatGPT** (publisher: **OpenAI**) — `openai.chatgpt`  
  (We’ll refer to this as “Codex” in class.)
- **GitHub Pull Requests and Issues** (optional but helpful)
- **Marp for VS Code** (optional; for slide previews/exports)

---

## 4) Codex in VS Code (how to use it well)

Codex is best when you:
- ask for **one clear change** at a time
- paste **errors** you’re seeing (not your whole life story)
- **review diffs** before accepting changes
- run your code after each change

Good prompts (examples):
- “Add a `--debug` flag that prints the request JSON we send and the response JSON we receive.”
- “Explain this error and propose the smallest fix: …”
- “Refactor this so it’s easier to read, without changing behavior.”

Safety:
- Don’t paste passwords, API keys, access tokens, or private data into chat.

---

## 5) Git + GitHub workflow (fork + PR)

### One-time setup (on GitHub)
1. Make a GitHub account (if you don’t have one).
2. Find the class repo (**MSTU 5010 - Student**) and click **Fork**:
   - `https://github.com/jmk2142/MSTU-5010-Student`

### Clone your fork (recommended: VS Code)
1. VS Code → Command Palette (`Cmd+Shift+P` / `Ctrl+Shift+P`)
2. “Git: Clone”
3. Paste your **fork** URL (not the upstream class repo URL)
4. Choose a local folder and open it in VS Code

### Add the upstream class repo remote (recommended)
In the terminal (inside your cloned repo folder):

- `git remote -v` (you should see `origin`)
- `git remote add upstream https://github.com/jmk2142/MSTU-5010-Student.git`
- `git remote -v` (now you should see `origin` and `upstream`)

### Weekly update pattern (sync from upstream)
- `git checkout main`
- `git pull upstream main`
- `git push origin main`

### Submission pattern (branch → commit → PR)
- `git checkout -b week02/<yourname>`
- make changes
- `git status`
- `git add -A`
- `git commit -m "Week 02 work"`
- `git push -u origin week02/<yourname>`
- Open a PR from your fork branch → upstream `main`

If you get stuck: stop before “force” commands and ask for help.

---

## 6) LM Studio (local model server)

### Goal
Run a model locally and expose an “OpenAI-compatible” endpoint so our CLI can call it.

### Setup checklist
1. Install and open LM Studio.
2. Download a model (your setup may vary; 3B models are often a good starting point).
3. Start the local server mode in LM Studio.
4. Write down:
   - **Base URL** (commonly something like `http://localhost:1234/v1`)
   - **Model name/id** (whatever LM Studio shows in the server screen)

We will use the endpoint:
- `POST <BASE_URL>/chat/completions` (or `POST <BASE_URL>/v1/chat/completions` depending on the base URL LM Studio shows)

If your request fails, the most common causes are:
- server not running
- wrong port
- wrong base URL
- wrong model name

---

## 7) Mini-lab: a tiny Node CLI that calls LM Studio

### Create a new folder
Make a folder anywhere (or inside your repo) and open it in VS Code:
- `mstu5010/week02-cli`

### Create `index.js`
Paste this (then edit `BASE_URL` and `MODEL`):

```js
const args = process.argv.slice(2);
const promptIndex = args.indexOf("--prompt");
const debug = args.includes("--debug");

if (promptIndex === -1 || !args[promptIndex + 1]) {
  console.log('Usage: node index.js --prompt "Hello" [--debug]');
  process.exit(1);
}

const prompt = args[promptIndex + 1];

const RAW_BASE_URL = process.env.BASE_URL || "http://localhost:1234";
const BASE_URL = RAW_BASE_URL.replace(/\/$/, "");
const API_BASE = BASE_URL.endsWith("/v1") ? BASE_URL : `${BASE_URL}/v1`;
const MODEL = process.env.MODEL || "PUT_YOUR_MODEL_NAME_HERE";

const request = {
  model: MODEL,
  messages: [
    { role: "system", content: "You are a helpful assistant." },
    { role: "user", content: prompt },
  ],
  temperature: 0.7,
};

async function main() {
  if (debug) {
    console.log("REQUEST JSON:");
    console.log(JSON.stringify(request, null, 2));
  }

  const res = await fetch(`${API_BASE}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request),
  });

  const data = await res.json();

  if (debug) {
    console.log("RESPONSE JSON:");
    console.log(JSON.stringify(data, null, 2));
  }

  const text = data?.choices?.[0]?.message?.content;
  if (!text) {
    console.error("No assistant text found at choices[0].message.content");
    process.exit(1);
  }

  console.log(text);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
```

### Run it
- `node index.js --prompt "Say hello in one sentence."`
- `node index.js --prompt "Say hello in one sentence." --debug`

If `--debug` prints request/response JSON, you’re ready for the boundary lab.
