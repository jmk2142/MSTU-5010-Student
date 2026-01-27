---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section {
    font-size: 28px;
  }
---

# Week 02
## Toolchain + Payload Boundaries

<!-- You: quick re-intro + why we’re doing “infrastructure” today -->

---

## Boundary Object (Today)

### Request/Response JSON

- strings in
- strings out

<!-- You: point to messages[], roles, temperature. “This is the whole trick.” -->

---

## Today’s Green Checks

1) You can open the course repo in VS Code  
2) You can run a Node demo from the terminal  
3) You can use Codex to make one small change  
4) (Optional) You can call LM Studio and inspect JSON

<!-- You: “We’re not chasing perfection — we’re getting a loop running.” -->

---

## Setup support (what I’ll help you do)

We’re a mixed Mac/Windows room. Expect installs and small hiccups.

Order (recommended):
1) VS Code
2) Git + GitHub sign-in (VS Code → browser login / HTTPS; no SSH keys today)
3) Codex (VS Code extension) + GitHub PRs extension (recommended)
4) Node.js (v18+)
5) LM Studio (optional / later)

<!-- You: circulate; pair people up; get green checks before moving on -->

---

## Get the code (before Activity 1)

You need the Week 02 demo folders on your machine.

- If you already cloned the repo: `git pull`
- If you haven’t: clone the course repo:
  - `https://github.com/jmk2142/MSTU-5010-Student`

Then in VS Code:
- `File → Open Folder…` (open the repo folder)

<!-- You: remind them the demo code lives in Demos/Week 02/ -->

---

## Activity 1 (Run given code)

- Open the repo folder
- Open terminal
- `node -v` (need v18+)
- Go to: `Demos/Week 02/Activity 1 - Run a Node Script/`
- Run: `node index.js hello`

<!-- You: this is just “prove Node + CLI args work” using provided code -->

---

## Activity 2 (Codex in VS Code)

Use Codex to add:
- `--prompt "..."`  
- `--debug` (prints request + response JSON)

Work from:
- `Demos/Week 02/Activity 2 - Codex Flags + Debug Lab/`

<!-- You: emphasize “review the diff”, “one change at a time”, “run after each change” -->

---

## Activity 3 (LM Studio)

Start local server and confirm:
- base URL
- model name

Then run the CLI.

Start from:
- `Demos/Week 02/Activity 3 - Payload Experiments (LM Studio optional)/`

First checkpoint (works even without LM Studio):
- `node index.js --prompt "Hello" --dry-run --debug`

<!-- You: common failure points = server off, wrong port, wrong model id, Node < 18 -->

---

## Mini-Lab: Change One Thing

Run 3 experiments (use `--debug`):

A) Change only `system`  
B) Change only `temperature`  
C) System: “ask 3 clarifying questions first”

<!-- You: “One variable at a time” = how we see boundaries clearly -->

---

## Share (optional): Fork + PR

- If you want to share with classmates:
  - Fork the repo
  - Clone your fork
  - Create a branch: `week02/<name>`
  - Commit + push
  - Open a PR

<!-- You: if PR is slow, “push branch today, PR as homework” -->
