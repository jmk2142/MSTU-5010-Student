---
marp: true
theme: default
paginate: true
size: 16:9
style: |
  section { font-size: 28px; }
  h1 { font-size: 1.7em; }
  h2 { font-size: 1.2em; }
  pre { font-size: 18px; }
---

# Week 11
## Interpretation, Meaning-Making, and Agentic Testing

**What kinds of meaning should remain human?**

---

## Week 10 -> Week 11

Last week:
- What kind of thinking is worth designing for?

This week:
- What kind of meaning should remain open?
- How does design shape interpretation?
- What happens when people attribute intention, care, or understanding to AI systems?

---

## Reading through-line

Three-part stack:

- **Gaver, Beaver, Benford**
  - ambiguity can be a resource, not only a flaw
- **Kress, Selander**
  - meaning is made through design, representation, and interpretation
- **Dorigoni, Giardino**
  - AI outputs are interpreted through authorship, legitimacy, empathy, and authenticity

---

## Gaver's provocation

Design does not always need to resolve ambiguity.

Ambiguity can open:
- reflection
- interpretation
- curiosity
- multiple readings

**Question: When should a project clarify meaning, and when should it leave meaning open?**

---

## Kress and Selander broaden it

Meaning is not simply delivered.

Meaning is made through:
- mode
- layout
- framing
- representation
- re-design by the user

Interpretation is not passive reception. It is a form of agency.

**Question: What modes, representations, and framing choices in your project are shaping how users make meaning?**

---

## Dorigoni and Giardino sharpen the AI issue

With AI systems, users do not only interpret content.

They also interpret:
- source
- intention
- empathy
- effort
- authenticity

Important caution: Fluency can trigger over-attribution.

**Question: What human qualities might users project onto your project because of its framing, even if the system has not earned that reading?**

---

## Design as epistemic work

Design is partly an epistemic endeavor.

We are trying to make meaning out of:
- our own choices
- user responses
- system behavior
- what a project appears to be doing

So testing is not only bug-finding.
Testing can also be a way of learning what our design is actually communicating.

---

## Why testing belongs in this week

Technical testing asks:
- Did the thing work?

Interpretive / UX testing asks:
- What did the interface invite the user to think, infer, or feel?

Agentic testing becomes useful here because it can help us gather evidence about:
- visible behavior
- framing
- feedback
- interface legibility
- repeated interaction patterns

---

## What agents can do now

With browser tools like Playwright, an agent can:

- open a real browser
- click, type, and navigate
- inspect the DOM
- run JavaScript in the page context
- capture screenshots
- write a structured report

This makes the agent a useful evidence-gatherer.
It does **not** make the agent the final interpreter.

---

## Human-in-the-loop warning

The agent can tell us:
- what changed
- what appeared
- what counts updated
- what the screenshot captured

But we still need humans to judge:
- whether the interface is meaningful
- whether ambiguity is productive or confusing
- whether the system invites bad over-attribution
- whether the report is saying something important

---

## Demo transition

What you are about to see:

- a small todo app
- an agent running browser tests on it
- DOM extraction
- screenshots
- a report scaffold
- optional visible cursor mode for legibility

As you watch, ask:

- What can the agent verify?
- What still requires human interpretation?

---

## Discussion after the demo

1. What did the test actually tell us?
2. What did it not tell us?
3. Where did the report produce useful evidence?
4. Where would a human still need to interpret meaning, tone, legitimacy, or user experience?
5. How might this kind of testing support your project without replacing your judgment?

---

## Project bridge

Complete these:

**The meanings my project invites are...**

**The meanings that should remain open are...**

**One thing I could test with an agent is...**

**One thing I should still interpret as a human is...**
