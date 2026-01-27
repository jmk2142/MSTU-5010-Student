# Activity 2 — Codex Lab (Add `--prompt` + `--debug`)

## Goal
Use Codex inside VS Code to *evolve* a tiny script into something that looks “LLM-shaped”:

- `--prompt "..."` becomes your main input
- `--debug` prints structured internals as JSON (a “boundary object” we can inspect)

You are not calling a real model yet. You are practicing the shape.

---

## Start here
Open this folder in VS Code and run:

- `node index.js`

You should see a usage message (that’s expected).

---

## What “done” looks like (behavior checklist)

When you’re finished, these should work:

1) Prints assistant text
- `node index.js --prompt "hello"`

2) Prints request + response JSON
- `node index.js --prompt "hello" --debug`

3) Missing prompt shows usage and exits
- `node index.js --debug`

---

## What to ask Codex (copy/paste prompts)

### Prompt 1 — Add `--prompt` + usage
“In `index.js`, implement `parseArgs(args)` so the script supports `--prompt` and `--debug`. If `--prompt` is missing, print a usage line and exit with code 1. Keep it beginner-readable and single-file.”

### Prompt 2 — Make the output “LLM-shaped”
“Add `buildRequest({ prompt })` that returns an object with `{ model, messages, temperature }`. Then create a `response` object shaped like `{ choices: [{ message: { content } }] }` where `content` is the text returned by `respondToInput(prompt)`.”

### Prompt 3 — Add `--debug` printing
“If `--debug` is present, print `REQUEST JSON:` then `JSON.stringify(request, null, 2)`, and `RESPONSE JSON:` then `JSON.stringify(response, null, 2)`. If not debug, print only the assistant text.”

### Prompt 4 — Sanity check commands
“Give me 3 terminal commands to verify everything works.”

---

## Debug mindset (important)
- Ask Codex for **one change at a time**.
- After each change, run your script again.
- If you get an error, paste the *exact* error message back into Codex.

