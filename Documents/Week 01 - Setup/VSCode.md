# VS Code (Visual Studio Code)

## What is VS Code?
VS Code is a free code editor you install on your computer. It’s where you’ll write files (HTML/CSS/JS, Markdown, etc.), run commands, and use tools like GitHub, Marp, and AI assistants.

If you’ve only used CodePen: CodePen is a website where your code runs in the browser. VS Code is a local workspace where you edit real files and folders on your computer.

## How projects work (the big idea)
- A **project** is usually a folder with files inside it.
- In VS Code you should open the **folder**, not just a single file.
  - Use `File → Open Folder…`
- Most tools (Git, terminals, extensions) behave better when a folder is open.

## Beginner orientation (most important parts)

### 1) Explorer (files on the left)
- The **Explorer** shows your project files and folders.
- You can create files/folders, rename things, and drag files around.

### 2) Editor (where you type)
- Tabs across the top are open files.
- Save often: `Cmd+S` (macOS) / `Ctrl+S` (Windows).

### 3) Command Palette (do almost anything)
- `Cmd+Shift+P` (macOS) / `Ctrl+Shift+P` (Windows)
- Type what you want, like:
  - “Git: Clone”
  - “Format Document”
  - “Markdown: Open Preview”

### 4) Search
- Find in file: `Cmd+F` / `Ctrl+F`
- Search across project: `Cmd+Shift+F` / `Ctrl+Shift+F`

### 5) Source Control (Git)
- The **Source Control** panel shows what changed and lets you commit/sync.

### 6) Integrated Terminal
- `Terminal → New Terminal`
- This is a command line *inside* VS Code.

## GitHub integration (basics)
VS Code can connect to GitHub so you can clone repos and sync changes.

- Sign in: Command Palette → “GitHub: Sign in”
- Clone the course repo: Command Palette → “Git: Clone”
- Use the Source Control panel to:
  - see changed files
  - write a commit message
  - commit and sync (when instructed)

Tip: If you’re unsure about a Git action (reset/rebase/force push), stop and ask.

## Codex / ChatGPT integration
We’ll primarily use the **ChatGPT extension** in VS Code.

- Install it from Extensions (`Cmd+Shift+X` / `Ctrl+Shift+X`) by searching `openai.chatgpt`.
- Use it for help explaining code, debugging, and generating starter code.

For details and safety notes, see: `Documents/Week 01 - Setup/Codex.md`.

## Integrated terminal (what it’s for)
The terminal is where you run commands for your project.

Examples you might use:
- `git status` (see what changed)
- `git pull` (get new course material)

Tip: The terminal usually runs commands in the folder you opened in VS Code. If something seems “missing”, check the folder path.

## Marp (Markdown slides)
Marp lets you turn a Markdown file into slides.

Typical steps:
1. Install the Marp extension in VS Code (search “Marp”).
2. Create a slide deck file like `something.marp.md` (or enable Marp for the file).
3. Separate slides with `---`.
4. Use Marp preview/export to make PDF/HTML.

## Live Server (for HTML projects)
If you build HTML/CSS/JS projects, **Live Server** gives you a local web page preview (similar to “Run” in CodePen).

Typical steps:
1. Install the **Live Server** extension.
2. Open an `.html` file.
3. Click “Go Live” (usually in the bottom bar).
4. Your browser opens and refreshes as you save.

## Helpful extras (optional, but worth learning)
- **Formatting**: Command Palette → “Format Document” (makes code easier to read)
- **Auto-save**: can be enabled in settings
- **Split editor**: view two files side-by-side
- **Problems panel**: shows errors/warnings
- **Debugging**: run and step through JavaScript (later)

## Extensions (what they are)
Extensions add features to VS Code (like Marp, Live Server, and ChatGPT).

- Open Extensions: `Cmd+Shift+X` (macOS) / `Ctrl+Shift+X` (Windows)
- Install: search and click **Install**
- Disable/uninstall: use the gear icon next to an extension

Tip: If VS Code starts acting weird, try disabling recently installed extensions.

## Settings Sync (optional)
If you use more than one computer, Settings Sync can keep your VS Code settings and extensions consistent.

- Command Palette → “Settings Sync: Turn On”
- Sign in when prompted

## Workspace Trust (safety)
VS Code may ask whether you trust a folder.

- Trust folders you created or downloaded from a class source you recognize.
- Don’t trust random zip folders from the internet.
- If you’re unsure, choose the safer option; you can still open files.

## Common file types you’ll see
- `.md` — Markdown (instructions, notes)
- `.html` — web page structure
- `.css` — styling
- `.js` — JavaScript behavior

Suggestion: keep related files together in a project folder (e.g., `index.html`, `styles.css`, `script.js`).

## Suggested next docs
- `Documents/Week 01 - Setup/GitHub.md` (Git + GitHub basics)
- `Documents/Week 01 - Setup/Markdown.md` (Markdown and previews)
- `Documents/Week 01 - Setup/Codex.md` (AI assistant setup + safety)
