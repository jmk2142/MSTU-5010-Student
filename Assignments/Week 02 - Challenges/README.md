# Week 02 — Challenges (try at home)

These are optional “challenge paths” you can try outside class. Pick **one** (or mix and match). The point is to experiment, notice what changes, and show up next class ready to share what you learned.

## Where we are in the course (Phase I: Boundary-Finding)
This week we’re treating the **request/response payload** as a boundary object: structured inputs go in, structured outputs come out. We’ll use that to ask: where do control, creativity, and dependence show up in the *structure* of interaction?

## Goals (done / not done)
By next class, aim to be able to:
1) Document experimentation + what you noticed (a short log is enough).
2) Bring 1–2 inquiries you want to discuss with others.
3) (Optional) Share your work via a GitHub pull request (PR) so classmates can learn from it.

---

## Pick a “path” (based on what many of you said you’re into)

You can do any challenge below, but if you want a simple starting point, choose one path and run 2–3 experiments.

### Path 1 — Tool vs companion (relationship framing)
**Core idea:** the same user prompt can feel very different depending on the `system` framing.

Try (Activity 3 script):
- Dry run (no LM Studio required):  
  - `node "Demos/Week 02/Activity 3 - Payload Experiments (LM Studio optional)/index.js" --prompt "Help me plan my study session." --system "You are a tool. Be concise and procedural." --dry-run --debug`
- If LM Studio works (optional): run the same command without `--dry-run` (and set `MODEL` first).

Try a contrast by changing only `--system`:
- `--system "You are a companion. Be warm, ask one question first, then help."`

**Inquiry prompts:**
- Did the interaction feel like a tool, a partner, or something else?
- Where is that “relationship” coming from: the model, the prompt, or your interpretation?

### Path 2 — Control / influence (prompt as policy)
**Core idea:** `system` prompts are a form of governance. They permit and prevent behaviors.

Try (change only `--system`):
- `--system "You are a strict compliance auditor. Ask a clarifying question before answering. If unsure, say so."`
vs
- `--system "You are a creative collaborator. Offer 3 options and clearly label assumptions."`

**Inquiry prompts:**
- What did your policy “allow” vs “block”?
- What is the cost of strictness? What is the cost of freedom?

### Path 3 — Dependence / delegation (metacognition)
**Core idea:** notice what you delegate to the system (or Codex) and what you still decide.

Try:
- Keep your user prompt constant.
- Change only one knob:
  - `--temperature 0.2` vs `--temperature 1.0`
- Then change only `--system`:
  - `--system "Before answering, ask exactly 3 clarifying questions."`

**Inquiry prompts:**
- When did you stop understanding because it “worked”?
- What did you outsource: generation, decision-making, justification, memory, confidence?

## Start from these demos (recommended)
- `Demos/Week 02/Activity 1 - Run a Node Script/`
- `Demos/Week 02/Activity 2 - Codex Flags + Debug Lab/`
- `Demos/Week 02/Activity 3 - Payload Experiments (LM Studio optional)/`

---

## Choose a challenge (idea pool)

### Challenge A — Boundary probe log (fastest, most reliable)
**Connects to:** control, creativity, dependence; “change one thing at a time”

**Do:**
- Use Activity 3 with `--debug` (or `--dry-run --debug` if LM Studio isn’t working).
- Run three times; change only one variable each time:
  - `system` message
  - `temperature`
  - “ask clarifying questions first”

**Ask:**
- What changed in the *payload*?
- What changed in the *output*?
- What boundary does that reveal (in your words)?

**Document:**
- 3 short entries (3–6 bullets each) + one “question I’m left with”.

---

### Challenge B — Prompt as policy (control / ethics)
**Connects to:** who decides what’s “correct”, platform control, influence

**Do:**
- Keep the same user prompt.
- Write two `system` messages:
  1) “control-heavy” (constraints, clarifying questions, careful tone)
  2) “creativity-heavy” (multiple options, playful tone)
- Run both and compare.

**Ask:**
- What did your `system` prompt *permit* or *prevent*?
- What’s the cost of control? What’s the cost of freedom?

**Document:**
- Paste the two `system` prompts + a short comparison.

---

### Challenge C — Tool vs companion switch (interface + framing)
**Connects to:** tool vs companion, agency, dependence

**Do (two options):**
- Option 1 (no code): Use Activity 3 and change only `--system` to “tool” vs “companion” framing.
- Option 2 (with code): Add a flag like `--mode tool|companion` that changes only the `system` message.

**Ask:**
- Did the interaction feel different even when the user prompt stayed the same?
- Where is the boundary: in the model, in the prompt, or in you?

**Document:**
- One prompt + two outputs + 5 sentences of reflection.

---

### Challenge D — “Memory” is a design choice (messages array)
**Connects to:** context, memory, delegation, what “chat” really is

**Do:**
- Make two runs:
  - Run 1: a normal prompt.
  - Run 2: repeat the same prompt, but include the previous assistant output as an `assistant` message in `messages`.

**Ask:**
- What changed when you changed the context?
- Where does “memory” live in this system?

**Document:**
- Show the two `messages` arrays (or describe them) and what changed.

---

### Challenge E — Codex as collaborator (metacognition)
**Connects to:** dependence, control, “who is steering whom?”

**Do:**
- Use Activity 2’s README prompts to implement `--prompt` and `--debug`.
- Keep a short log of:
  - what you asked Codex to do
  - what it changed
  - what you accepted/rejected and why

**Ask:**
- When did Codex feel like a tool vs a co-author?
- What did you stop understanding because it “worked”?

**Document:**
- 5–10 bullets + one question you’d like to discuss in class.

---

## Sharing (PR) — optional, but useful

If you want to share with classmates, do it via PR from your fork:

### What to include
- A short Markdown log (recommended: `Assignments/Week 02 - Challenges/<github-username>/log.md`)
- Keep it technical + reflective, not personal.

### What NOT to include (important)
- No passwords, API keys, access tokens.
- No private/personal info (yours or anyone else’s).
- No huge files (videos, big datasets, model binaries).

### PR etiquette
- Small PRs are easier to review.
- One challenge per PR is fine.
- If you’re unsure whether something is appropriate to publish in a public repo, don’t include it—bring it to class instead.

---

## “Done” checklist (bring to next class)
- I tried at least one challenge.
- I have at least one screenshot / snippet / log entry.
- I can explain one payload field (`messages`, `role`, `temperature`) and what it does.
- I have 1–2 questions I want to discuss.
