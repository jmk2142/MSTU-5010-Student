# Week 11 Playwright Todo Demo Test Suite

This suite is designed for a live classroom run. It emphasizes visible browser behavior, lightweight DOM inspection, and simple reporting patterns students can reuse when prompting an agent.

## Test Intent

The goal is not exhaustive QA. The goal is to show that an agent can:

- manipulate a live page in a headed browser
- inspect the rendered DOM and extract information
- run JavaScript in the page context
- produce evidence-backed test notes and a structured report
- optionally use visible cursor movement for dramatic effect during a demo

## Modes

### Mode A: Fast Test Mode

Use direct element-targeted actions such as clicking by selector or `data-testid`.

Best for:

- reliability
- speed
- repeatable classroom setup

### Mode B: Visible Cursor Mode

Use explicit mouse movement plus mouse down/up to make automation easier to follow visually.

Best for:

- classroom theater
- helping students track what the agent is doing
- showing that automation can feel embodied, not just abstract

Note:

Visible cursor motion is presentation-oriented. It is not inherently a better testing method than direct element-targeted automation.

## Core Tests

| ID | Test Name | Agent Capability | Suggested Mode | Expected Outcome |
| --- | --- | --- | --- | --- |
| T1 | Open App + Read Baseline | page loading, DOM reading | A or B | App loads, shows 3 tasks, counts read correctly |
| T2 | Add Task Through UI | typing, clicking, state verification | A or B | New task appears, totals update, activity log updates |
| T3 | Toggle Existing Task | click interaction, visual state change | A or B | A task changes from active to done or back |
| T4 | Remove Completed Tasks | action chaining, DOM verification | A or B | Completed tasks are removed and counts update |
| T5 | Extract Structured DOM State | JavaScript evaluation, data extraction | A or B | Agent returns counts, visible items, status line, activity text |
| T6 | Capture Visual Evidence | screenshot capture | A or B | A screenshot is saved to `output/playwright/` |
| T7 | Cursor Theater Pass | mouse movement, embodied interaction | B | Cursor visibly moves, clicks input/button/item, page responds |

## Detailed Test Steps

### T1. Open App + Read Baseline

Actions:

1. Open the demo in a headed browser.
2. Inspect visible counts and task list.
3. Read the DOM for total, completed, and remaining counts.

Expected:

- total count is `3`
- completed count is `1`
- remaining count is `2`
- visible items include:
  - `Go to the gym`
  - `Cook dinner`
  - `Check assignment`

Evidence to capture:

- a snapshot or short note of the initial state
- DOM extraction result

### T2. Add Task Through UI

Actions:

1. Type a new task into the input.
2. Click `Add Task`.

Suggested task text:

`Watch the agent drive this page`

Expected:

- task appears in the list
- total count increases by `1`
- remaining count increases by `1`
- activity log states that the task was added

Evidence to capture:

- task text added
- post-action counts
- activity log text

### T3. Toggle Existing Task

Actions:

1. Click an active task such as `Cook dinner`.
2. Optionally click the newly added task as well.

Expected:

- clicked item changes status between `active` and `done`
- completed count updates
- item styling changes visually
- activity log describes the toggle action

Evidence to capture:

- list of visible items with `ACTIVE` / `DONE`
- updated counts

### T4. Remove Completed Tasks

Actions:

1. Click `Remove Completed`.

Expected:

- all completed tasks disappear from the list
- total count drops
- completed count becomes `0`
- activity log names what was removed

Evidence to capture:

- final counts
- final visible items
- activity log text

### T5. Extract Structured DOM State

Actions:

1. Run JavaScript in the page context to return:
   - counts
   - status line
   - latest action
   - visible items

Expected:

- the result matches what is visible on screen
- values are returned in a structured form such as JSON

Evidence to capture:

- the exact extracted object

### T6. Capture Visual Evidence

Actions:

1. Save a screenshot during or after the run.

Expected:

- image file is created
- file path is recorded in the results

Evidence to capture:

- screenshot path

### T7. Cursor Theater Pass

Actions:

1. Keep visible cursor mode on.
2. Move the cursor to the input.
3. Focus input with mouse down/up.
4. Type a task.
5. Move to `Add Task`.
6. Click using mouse down/up.
7. Move to a todo item and click it.

Expected:

- cursor visibly moves across the page
- the page still responds correctly to interactions
- activity log reflects the actions taken

Evidence to capture:

- screenshot showing cursor mode
- note that this pass is presentation-oriented

## Suggested Classroom Run Order

1. T1 Open App + Read Baseline
2. T2 Add Task Through UI
3. T3 Toggle Existing Task
4. T5 Extract Structured DOM State
5. T4 Remove Completed Tasks
6. T6 Capture Visual Evidence
7. T7 Cursor Theater Pass

## Reporting Guidance

Students should not only say "it worked." They should report:

- what action was taken
- what evidence was collected
- whether expected behavior matched observed behavior
- what the final page state was
- what remains uncertain

The companion files `TEST-RESULTS-TEMPLATE.md` and `TEST-RESULTS.md` show one way to scaffold that reporting.
