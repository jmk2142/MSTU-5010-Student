# Week 11 Playwright Todo Agent Demo

This demo is a small Vue todo app designed for live browser automation. It is intentionally simple so students can watch an agent manipulate the page, inspect the DOM, and verify state changes in a headed browser.

## Run

From this folder:

```bash
npm start
```

Then open:

```text
http://127.0.0.1:4011
```

## Demo Goal

Use a live browser agent to:

- click tasks to toggle them complete and incomplete
- type a new task into the input field
- remove completed tasks
- inspect live DOM values such as task counts and status text
- execute JavaScript in the page context to extract structured state

## Notes

- The page uses Vue 3 from a CDN to keep setup light.
- Stable `data-testid` hooks are included to make automation easier.
- The page includes an optional visible cursor overlay for live demos.
- You can run the browser in two styles:
  - reliable element-targeted actions for fast testing
  - explicit mouse movement plus mouse down/up for more dramatic classroom viewing
- Browser artifacts can be stored under `output/playwright/`.
