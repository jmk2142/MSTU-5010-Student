# Codex / ChatGPT in VS Code — Quick Guide

## What is this?
In this course, you’ll use an AI assistant inside **Visual Studio Code (VS Code)** to help you learn and work more efficiently (explain code, debug errors, generate starter code, and review changes).

The main tool we’ll use is the **ChatGPT extension for VS Code**:
- https://marketplace.visualstudio.com/items?itemName=openai.chatgpt

## Install (recommended: VS Code extension)
1. Install VS Code: https://code.visualstudio.com/
2. Open VS Code.
3. Open the Extensions panel:
   - Click the Extensions icon on the left, or press `Ctrl+Shift+X` (Windows) / `Cmd+Shift+X` (macOS).
4. Search for **“ChatGPT”** (publisher: **OpenAI**) or search for `openai.chatgpt`.
5. Click **Install**.
6. Sign in / connect your account when prompted.

## Use it (typical workflow)
1. Open the course repository folder in VS Code (`File → Open Folder…`).
2. Open the ChatGPT/Codex panel (from the sidebar) and start a chat.
3. Ask for one clear task at a time, for example:
   - “Explain what `Assignments/` contains.”
   - “Help me understand this error message: …”
   - “Create a starter file for Assignment 1 with TODO comments.”
4. Review any changes before you commit.

## Safety + privacy (important, not scary)
AI assistants can only work with what you share with them.

Keep these habits:
- Don’t paste passwords, API keys, access tokens, or private info into chat.
- Assume anything you type into a tool could be saved/processed by that tool.
- Before you share logs/screenshots publicly, remove private details (your name, tokens, file paths).
- If the tool asks for extra permissions, read what it’s requesting and only allow what you understand.

## Good habits (recommended)
- Use Git to review changes before committing:
  - `git status`
  - `git diff`
- Run/preview your work before submitting.

## Optional: Codex CLI (advanced)
Some developers run Codex from the terminal. You do **not** need this for the course unless we explicitly ask you to install it.

If you do use a terminal-based assistant, make sure you run it from the correct folder (so it doesn’t look at unrelated files).
