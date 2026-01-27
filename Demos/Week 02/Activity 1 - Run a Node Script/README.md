# Activity 1 — Run a Node Script (CLI args)

## Goal
Prove your setup works:
- VS Code can run a Node script
- You can pass a command-line argument into the script

## Run
From this folder:

- `node index.js hello`
- `node index.js hi`
- `node index.js something-else`

## What to notice
`node index.js hello` passes `"hello"` into the program as the first “user” argument:
- Node exposes it as `process.argv[2]`.

