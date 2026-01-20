# Git + GitHub (Course Setup)

This course is managed through the **MSTU 5010 - Student** repository. You’ll use Git/GitHub to get the latest materials and (sometimes) submit work.

## Git vs GitHub (what’s the difference?)
- **Git** is the tool on your computer that tracks file changes over time (like “save points” for code).
- **GitHub** is a website that hosts Git repositories online so you can download them, collaborate, and submit changes.

Think of it like:
- Git = the version history tool
- GitHub = the online home for that history

## Create a GitHub account
1. Go to https://github.com/
2. Click **Sign up** and create an account.
3. Verify your email address.

Recommended:
- Choose a professional username (I recommend using your UNI so it is easy for me to track your contributions).
- Turn on **two-factor authentication (2FA)** for account security.

## Install Git (if you don’t already have it)
You can check if Git is installed by opening a terminal and running:
- `git --version`

If you don’t have Git:
- macOS: install **Xcode Command Line Tools** when prompted, or install Git via https://git-scm.com/download/mac
- Windows: install Git for Windows: https://git-scm.com/download/win

## Connect GitHub to VS Code
1. Install VS Code: https://code.visualstudio.com/
2. Open VS Code.
3. Sign in to GitHub from VS Code:
   - Open the Command Palette: `Cmd+Shift+P` (macOS) / `Ctrl+Shift+P` (Windows)
   - Search for **“GitHub: Sign in”** and follow the prompts.

This helps VS Code work smoothly with GitHub (cloning, syncing, and pull requests).

## Get the course repository (clone)
Cloning downloads the repository to your computer.

### Option A: VS Code (recommended)
1. In VS Code, open the Command Palette: `Cmd+Shift+P` / `Ctrl+Shift+P`
2. Choose **“Git: Clone”**
3. Paste the repository URL your instructor provides
4. Choose a folder on your computer to save it
5. When prompted, click **Open**

### Option B: Terminal
1. Copy the repo URL from GitHub
2. Run:
   - `git clone <REPO_URL>`
3. Open the folder in VS Code.

## Stay up to date (pull)
As the course progresses, new materials will be added. You should regularly update your local copy.

- In VS Code: use the **Source Control** panel → **Sync** / **Pull** (wording may vary)
- In Terminal (inside the repo folder):
  - `git pull`

Tip: If you made local edits and `git pull` complains, ask for help before forcing anything.

## What you’ll usually do
- **Pull** new materials as they are published.
- Create your own work in a separate folder/branch if requested.
- Submit work via GitHub (often as a pull request) when the assignment asks for it.

## Common vocabulary
- **Repository (repo):** a project folder tracked by Git
- **Commit:** a saved checkpoint
- **Push:** send your commits to GitHub
- **Pull:** get updates from GitHub
- **Pull request (PR):** a request to merge changes (common for submissions)

## Safety note
- Don’t commit secrets (passwords, API keys).
- If you’re unsure what you’re about to do, stop and ask—especially before running commands like `git reset --hard`.
