# Week 02 — Concepts + Definitions + Inquiry (Payload Boundaries)

This week’s theme: the “boundary” between human and AI shows up in **structures** (interfaces, roles, parameters, and norms), not just in vibes.

Our shared boundary object is the **request/response JSON** that powers “chat.”

## Course repo (for forking + PR submissions)
- https://github.com/jmk2142/MSTU-5010-Student

---

## Concepts & Definitions

- **Boundary-finding:** noticing where distinctions (human vs AI, control vs delegation, tool vs companion) actually appear in real systems.
- **Boundary object:** something we can all inspect and manipulate (today: the JSON payload).
- **Endpoint / base URL:** where requests go (e.g., `http://localhost:1234/v1`).
- **Request payload:** the JSON we send to the model server.
- **Response payload:** the JSON the server sends back.
- **Messages array:** the ordered list of “turns” we send each time. This is how a multi-turn chat gets its memory.
- **Roles:**  
  - `system` = stance/rules/constraints (“how to behave”)  
  - `user` = task/question (“what to do”)  
  - `assistant` = prior outputs we may include as context (“what happened before”)
- **Parameters (“knobs”):**
  - **temperature:** how varied the outputs are (lower = more consistent; higher = more varied)
  - **max_tokens:** a hard cap on output length (a literal boundary)
  - **stop:** tells the model where to stop (a formatting/control boundary)
- **Interpretation boundary:** the meaning isn’t *in* the strings—meaning is made by people reading them (individually + socially).

---

## Skills (what you should be able to do)

Technical:
- Run a Node CLI from VS Code.
- Call a local model server and print the result.
- Turn on `--debug` and point to exactly where input and output live in the JSON.

Workflow:
- Use Codex to make one specific change, then verify the diff.
- Use GitHub fork + PR to submit work cleanly.

---

## Inquiry prompts (use these to guide your experiments)

### Control / Influence
- What changes when the `system` message changes?
- Who chooses the defaults (role structure, temperature, max tokens), and what do those defaults *do*?

### Creativity
- Is “creativity” in the model’s sampling settings, the prompt, or the human interpretation?
- What does it mean to call an output “original” if the process is statistical and the inputs are borrowed?

### Dependence / Delegation
- When a system asks you clarifying questions, is that “help” or a new form of steering?
- What parts of thinking are you outsourcing: idea generation, decision-making, justification, memory, confidence?

### Tool vs Companion
- How does the interaction change if you frame the system as “instrument” vs “entity”?
- What social expectations get attached to each frame?

---

## Boundary mini-lab (change one thing at a time)

Rule: do 3 runs, change **only one** field per run, and keep everything else identical.

### Probe A — Roles / control
Keep the same user prompt, but change only the `system` message:
- “You are a strict compliance auditor. Ask for missing info before answering.”
vs
- “You are a playful collaborator. Offer multiple options.”

### Probe B — Randomness / creativity
Keep the same prompt and same messages, but change only:
- `temperature: 0.2` vs `temperature: 1.0`

### Probe C — Dependence / agency shift
Change only the `system` message:
- “Before answering, ask exactly 3 clarifying questions.”

### Reflection (short, for your README/PR)
- What did you change (exactly)?
- What changed in the output?
- What boundary does that reveal (in your words)?
