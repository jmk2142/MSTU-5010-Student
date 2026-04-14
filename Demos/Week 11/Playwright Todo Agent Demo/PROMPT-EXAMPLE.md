# Prompt Example for Running the Demo Suite

This is an example prompt students can adapt when they want an agent to run the browser demo and produce a structured report instead of a vague summary.

## Prompt

```text
Run the Playwright Todo Demo test suite in this folder.

Use TEST-SUITE.md as the source of truth for what to test.
Use TEST-RESULTS-TEMPLATE.md as the reporting model.
Fill in a fresh TEST-RESULTS.md with the results of this run.

Requirements:
- Open the app in a headed browser.
- Run the core tests in order.
- Use fast element-targeted actions unless I explicitly ask for visible cursor mode.
- Capture at least one screenshot in output/playwright/.
- Extract DOM state with JavaScript at least once.
- Record concrete evidence, not just conclusions.
- Mark each test as Pass, Fail, or Partial.
- Include final counts, final visible items, and final activity log text.
- Include run iteration, agent, and model at the top of TEST-RESULTS.md.
- If something fails, explain what happened and what follow-up is needed.

Report file handling:
- If TEST-RESULTS.md does not exist, create it.
- If TEST-RESULTS.md already exists, treat the new report as the next run iteration and overwrite the file with the new completed report.
- If a prior TEST-RESULTS.md exists, briefly note what changed from the previous run at the top of the new report.

Dependency handling:
- If a later test depends on an earlier test passing, mark the blocked test as Deferred rather than Fail.
- In the notes, explain exactly which earlier test blocked it.
- If you fix the blocking issue during the same run, go back and execute the deferred test.
- Prioritize repairing blocking failures before continuing deeper into the suite.

When you are done:
- save the completed report in TEST-RESULTS.md
- summarize the run briefly in chat
- cite the screenshot path you captured
```

## Cursor Mode Variant

```text
Run the Playwright Todo Demo test suite in visible cursor mode.

Use TEST-SUITE.md as the source of truth for what to test.
Use TEST-RESULTS-TEMPLATE.md as the reporting model.
Fill in a fresh TEST-RESULTS.md with the results of this run.

Additional requirements:
- Keep the page's visible cursor mode on.
- Use explicit mouse movement and mouse down/up for at least one input interaction, one button click, and one todo-item click.
- Note in the report which actions were done for dramatic classroom effect rather than strict testing necessity.
- Capture a screenshot that shows the cursor-mode run.
- Include run iteration, agent, and model at the top of TEST-RESULTS.md.
```

## Iteration-Aware Variant

```text
Run the Playwright Todo Demo test suite in this folder and treat this as an iterative testing cycle.

Use TEST-SUITE.md as the source of truth for what to test.
Use TEST-RESULTS-TEMPLATE.md as the reporting model.
Write the finished report to TEST-RESULTS.md.

Iteration logic:
- If TEST-RESULTS.md is missing, create Run Iteration 1.
- If TEST-RESULTS.md already exists, inspect it first and increment the run iteration number.
- At the top of the new report, add a short "Changes Since Prior Run" note.

Execution rules:
- Run the suite in order.
- If a failure blocks dependent tests, mark those tests Deferred.
- Try to fix or work around the blocking issue before ending the run.
- If the blocking issue is resolved, return to the deferred tests and complete them.
- Prefer evidence-backed reporting over narrative summary.

Evidence requirements:
- Capture at least one screenshot.
- Extract DOM state with JavaScript at least once.
- Record exact activity-log text and final counts.
- State clearly which tests passed, failed, were partial, or were deferred.
```

## Why Add This Logic

This kind of prompt logic helps students see that they can specify:

- how reruns should be counted
- what to do when earlier failures block later tests
- when to defer versus fail
- how to compare one run against the prior one
- what evidence matters most

## Why This Prompt Works

It gives the agent:

- a concrete test source
- a concrete reporting target
- required evidence types
- a final file to produce
- a distinction between reliable testing behavior and theatrical demo behavior

That structure reduces the chance of getting a hand-wavy end report.
