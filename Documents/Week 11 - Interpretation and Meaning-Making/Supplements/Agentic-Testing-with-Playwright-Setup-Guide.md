# Week 11 — Agentic Testing with Playwright Setup Guide

This guide is a technical supplement to Week 11.
The main focus of the week remains interpretation and meaning-making; this document is a practical add-on to help you test project work with an agent in a live browser.

## Who this is for

Students who are new to testing, new to Playwright, and new to the idea that an agent can help run technical and UX-oriented tests inside a live browser.

## What this guide helps you answer

- Why test at all?
- What kinds of testing matter for beginner web projects?
- What is Playwright in simple terms?
- What can an agent do with Playwright today?
- Where should a human stay in the loop?
- How do you set up a simple testing environment like the Week 11 demo?
- How do you structure prompts and reports so the test run is useful?

## Quick definition

Playwright is a browser automation tool.
It can open a browser, click buttons, type into fields, inspect the page, and verify what appears on screen.

An agentic testing workflow means:

1. A human defines the testing goal and expectations.
2. An agent uses tools to run the browser and inspect the page.
3. The agent reports what happened.
4. A human interprets the meaning of the results and decides what to fix next.

## Why test?

Beginners sometimes think testing is only for large, professional software teams.
That is too narrow.

Testing helps because it lets you:

- catch breakage early
- verify that your code still does what you think it does
- compare what you expected against what actually happened
- produce evidence instead of vague impressions
- make changes with more confidence

Testing is not only about "finding bugs."
It is also about making your own thinking visible.

## Two broad kinds of testing to know

### 1. Technical testing

This asks:

- Does the code run?
- Does a button trigger the right behavior?
- Does the page update correctly after an action?
- Does the data shown in the DOM match the intended state?

Examples:

- clicking `Add Task` creates a new todo
- removing completed items actually removes them
- a count updates from `3` to `4`

### 2. UX testing

This asks:

- Can a person understand what to do?
- Is the interface legible?
- Is feedback visible after an action?
- Does the flow feel confusing, slow, or brittle?

Examples:

- is it obvious which item is complete?
- does the page confirm what just happened?
- is the layout readable when the browser is small?
- does the testing report capture what a human might care about?

Good testing often combines both.
A feature can be technically correct and still be a poor user experience.

## Where agentic testing fits

Recent agents can do much more than static code review.
They can now:

- read project files
- run terminal commands
- launch a real browser
- interact with the page
- inspect the DOM
- execute JavaScript in the page context
- capture screenshots
- write a structured report

That is powerful because it turns an agent from a purely conversational helper into an active tester.

But this does not remove the human.
It changes the human role.

The human still decides:

- what matters enough to test
- what counts as success
- whether a failure is serious
- whether a weird result is a bug, a design issue, or an acceptable tradeoff

## Human-in-the-loop principle

Automation is powerful.
Interpretation is still human work.

An agent can tell you:

- the button was clicked
- the count changed
- the screenshot shows a state
- the DOM contains certain values

The agent cannot fully replace your judgment about:

- whether the interface makes sense to a novice user
- whether a design choice is pedagogically good
- whether the report is answering the question you actually care about

The strongest workflow is:

1. Human defines the question.
2. Agent gathers evidence.
3. Human interprets significance.
4. Agent helps rerun, refine, or expand the test.

## What makes a good test report?

A weak report says:

- "It worked."

A stronger report says:

- what the agent did
- what evidence was collected
- what was expected
- what actually happened
- whether the test passed, failed, or was blocked
- what remains uncertain

Good reports are:

- specific
- evidence-based
- easy to scan
- reusable across multiple runs

This is why the Week 11 demo includes:

- `TEST-SUITE.md`
- `TEST-RESULTS-TEMPLATE.md`
- `PROMPT-EXAMPLE.md`

These files show that you can shape an agent's reporting behavior by being explicit about format.
In this student version, `TEST-RESULTS.md` is meant to be created fresh during each run.

## What kinds of things should you test?

Start small.

Good beginner tests often check:

- page loads successfully
- key text appears
- input fields accept text
- buttons trigger visible state changes
- counts or labels update correctly
- error states appear when expected
- screenshots reflect the expected state

Later, you can test:

- mobile layouts
- repeated action sequences
- edge cases
- blocked or disabled actions
- regression after code changes

## What should you design around before writing tests?

If you want browser automation to work well, design the page with testing in mind.

Helpful design choices include:

- clear button labels
- stable `data-testid` hooks
- visible status text
- activity or confirmation messages
- predictable page state

These make the page easier for:

- users
- agents
- you, when reading the report later

## What is Playwright in practical terms?

Playwright is not "AI."
It is the browser automation engine.

The agent uses Playwright as a tool.

That means:

- the agent decides what to do
- Playwright performs the browser actions

You can think of it like this:

- Agent = planner + operator + reporter
- Playwright = hands on the browser

## Why use Playwright with an agent?

Because it lets you test from the user's point of view.

Instead of only asking:

- "Does this function return the right value?"

you can also ask:

- "What happens when the page loads?"
- "What appears after I click this?"
- "Can the agent read the visible state?"
- "Can I save a screenshot of the result?"

This makes browser testing feel much more concrete for beginners.

## Main environment for this course: Codex desktop

For this guide, the main setup assumes:

- you are using the Codex desktop application
- you can run terminal commands in the workspace
- the agent can use Playwright in a headed browser

Why this environment works well for teaching:

- students can see the agent act
- the workspace, files, and browser flow are all in one place
- report files can be edited directly in the repo

## Side notes for other environments

### Claude Code

The same testing logic can apply if Claude Code has access to:

- the project files
- terminal commands
- a browser automation tool

The exact browser setup and permissions may differ, but the testing concepts stay the same.

### Antigravity

Antigravity-style setups may make cursor motion especially visible.
That can be useful for demos because the browser actions feel more embodied.

But remember:

- cursor choreography is presentation value
- stable evidence collection still matters more than theatrics

### Codex in VS Code

The same overall structure can work in VS Code if your setup allows:

- terminal access
- local project execution
- Playwright/browser automation

The main difference is interface, not concept.

## Week 11 organization strategy

Use the folders like this:

- `Demos/Week 11/`
  - runnable examples
  - app files
  - screenshots
  - test suite files directly tied to a demo
- `Documents/Week 11 - Agentic Testing with Playwright/`
  - teaching guides
  - tutorial-style documents
  - material meant to explain a workflow, not just run it

That is why this guide lives in `Documents` while the todo app and its testing files live in `Demos`.

## The Week 11 demo you can use

Reference demo:

`Demos/Week 11/Playwright Todo Agent Demo/`

Important files:

- `README.md`
- `TEST-SUITE.md`
- `TEST-RESULTS-TEMPLATE.md`
- `PROMPT-EXAMPLE.md`
- `output/playwright/`

This demo is meant to be the easiest path from "I have never done this" to "I can run an agent through a browser test and read the results."
Create `TEST-RESULTS.md` fresh when you run the suite.

## Step-by-step setup guide

### Step 1. Make sure Node is installed

In a terminal, check:

```bash
node --version
npm --version
npx --version
```

If those commands work, your machine has the basic Node tooling needed for the demo.

### Step 2. Open the student workspace in Codex desktop

You should be in:

`MSTU 5010 - Student`

Then navigate to:

`Demos/Week 11/Playwright Todo Agent Demo/`

### Step 3. Start the demo app

From the demo folder:

```bash
npm start
```

The app should run at:

```text
http://127.0.0.1:4011
```

### Step 4. Let the agent open the browser

Ask the agent to:

- open the page in a headed browser
- inspect the initial state
- run the tests in `TEST-SUITE.md`

This is where Playwright becomes visible and useful.

### Step 5. Use the suite and reporting scaffold

Tell the agent to use:

- `TEST-SUITE.md` as the testing plan
- `TEST-RESULTS-TEMPLATE.md` as the report model
- `TEST-RESULTS.md` as the fillable report for the current run

This matters because the prompt becomes a process design, not just a task request.

### Step 6. Capture at least one screenshot

Screenshots are useful because they:

- show what the page looked like
- give visual evidence beyond textual claims
- make class demonstrations easier to discuss

The demo stores screenshots in:

`output/playwright/`

### Step 7. Read the report critically

Do not stop at "all tests passed."

Ask:

- Did the report include actual evidence?
- Did it say what changed?
- Did it distinguish between technical success and presentation-only behavior?
- If something failed, did it explain why?

## Example beginner prompt

Use the prompt scaffold in:

`Demos/Week 11/Playwright Todo Agent Demo/PROMPT-EXAMPLE.md`

That file already includes:

- a normal run prompt
- a visible cursor variant
- an iteration-aware variant

The point is to show that prompt structure can control:

- reporting format
- iteration handling
- deferred tests
- evidence expectations

## A simple mental model for the full loop

1. Build a small page.
2. Add stable hooks and visible feedback.
3. Define the suite.
4. Define the report format.
5. Prompt the agent to run the suite.
6. Review the evidence like a human.
7. Revise the page, the tests, or the report structure.

This is a design loop, not just a debugging trick.

## Common beginner mistakes

- Asking for "test this" with no suite or expectations.
- Treating agent output as trustworthy without evidence.
- Forgetting screenshots or DOM extracts.
- Writing reports that only say pass/fail.
- Designing pages with no stable labels or hooks.
- Confusing cursor theater with actual testing quality.

## What to look for when interpreting results

Look for:

- mismatches between expected and observed behavior
- places where the UI technically works but is hard to read
- missing evidence
- ambiguity in the report
- repeated failures that suggest a structural problem

Also notice when the test itself is weak.
Sometimes the problem is not the page.
Sometimes the problem is that the test question was underspecified.

## Where agent technology is right now

Today, agents are good at:

- executing a clear suite
- gathering evidence
- repeating flows
- updating structured reports

They are weaker at:

- making subtle judgment calls with no criteria
- knowing what matters unless you specify it
- replacing human interpretation of UX quality

So the practical lesson is:

use agents for disciplined evidence gathering,
not as substitutes for design judgment.

## If you want to adapt the demo to your own project

Start by borrowing the structure, not the exact app.

Recreate:

- a small runnable page
- a few stable `data-testid` hooks
- a concise `TEST-SUITE.md`
- a reusable `TEST-RESULTS-TEMPLATE.md`
- a fillable `TEST-RESULTS.md`
- a prompt file that tells the agent exactly how to run and report

Then swap in your own interface and testing goals.

## Exit challenge

Build a tiny page of your own and add:

- one input
- one button
- one visible status area
- one screenshot-based evidence step
- one DOM extraction step
- one short test suite
- one report template

Then prompt the agent to run the suite and compare the results against your own interpretation.
