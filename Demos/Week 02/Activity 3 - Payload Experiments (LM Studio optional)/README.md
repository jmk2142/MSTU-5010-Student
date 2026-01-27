# Activity 3 — Payload Experiments (LM Studio optional)

## Goal
Use the *payload shape* to explore boundaries:
- roles (`system` vs `user`)
- “knobs” like `temperature`
- what changes when you change **one thing at a time**

If your LM Studio server works, you can connect to it. If not, you can still do the same experiments by printing the request JSON (`--dry-run`) and/or pairing with someone.

---

## Run (no LM Studio required)
From this folder:

- `node index.js --prompt "Hello" --dry-run --debug`

This prints the request JSON. Your job is to read it and explain:
- where the user input lives
- where the system instruction lives
- which field is the “randomness knob”

---

## Mini-lab: change one thing at a time

Run 3 times; each time change only one input.

### Probe A — Control (role / system message)
Change only `--system`:
- `--system "You are a strict compliance auditor. Ask a clarifying question before answering."`
vs
- `--system "You are a playful collaborator. Offer three options."`

### Probe B — Creativity (temperature)
Change only `--temperature`:
- `--temperature 0.2` vs `--temperature 1.0`

### Probe C — Dependence (who asks questions)
Change only `--system`:
- `--system "Before answering, ask exactly 3 clarifying questions."`

For each probe, write 2–3 sentences:
- What did you change (exactly)?
- What changed in the output (or what would likely change)?
- What boundary does that reveal?

---

## Optional: connect to LM Studio (extension)

If you have LM Studio running in OpenAI-compatible mode, set:
- `BASE_URL` (often `http://localhost:1234`)
- `MODEL` (copy the model id/name exactly from LM Studio)

Then run:
- macOS / zsh: `BASE_URL="http://localhost:1234" MODEL="<MODEL_NAME>" node index.js --prompt "Hello" --debug`
- Windows PowerShell: `$env:BASE_URL="http://localhost:1234"; $env:MODEL="<MODEL_NAME>"; node index.js --prompt "Hello" --debug`

If it fails, the top causes are:
- server not running
- wrong port / wrong base URL
- wrong model id
- Node too old (< 18)

---

## What to ask Codex (prompt techniques)

If you want Codex to help you run better experiments:
- “Help me rewrite the `system` message to maximize *control* without refusing the user.”
- “Help me design three prompts that test creativity vs compliance while keeping the user prompt constant.”
- “Help me change the code so `--debug` prints request + response JSON, and the script prints only `choices[0].message.content` when not debugging.”

