# Week 12 Supplement - MCP Servers as an Optional Project Tool

This is an optional supplement for students who want a little awareness of what `MCP servers` are and how they might be useful in project work.

Week 12 is **not** about MCP servers.
This is just a practical side path for anyone who wants to explore one more way AI tools can connect to design, prototyping, documentation, and development workflows.

## What is MCP?
`MCP` stands for `Model Context Protocol`.

In plain language:

- an `AI client` is the tool you are using
  - for example Codex, Claude Code, Cursor, or VS Code with an agent
- an `MCP server` connects that AI tool to some outside system
  - for example Figma, Notion, GitHub, or a browser automation tool

So MCP is not a model.
It is a way for an AI tool to connect to other tools and data sources.

One useful mental model is:

> MCP gives an AI system more handles on the world.

Without MCP, an agent often works from:

- your prompt
- pasted text
- uploaded files
- whatever it can infer

With MCP, an agent may be able to:

- inspect a Figma file directly
- read a Notion page as structured context
- inspect a repository more directly
- test a prototype in a real browser
- call tools instead of guessing what those tools would return

## Why this might matter for your project
If you are building a tool, prototype, interface, or workflow this semester, MCP can sometimes make an AI system more useful because it has better context and more grounded ways to act.

That does **not** mean the AI becomes the designer, author, or decision-maker.
It means the AI may be able to participate more effectively in certain parts of the process.

That is the light connection to Week 12:

- what is being supported?
- what is being delegated?
- what still remains clearly human?

## Why Figma is a good first example
Figma is a strong entry point because many of you already know what it is and what it contains.

That makes it easier to see what MCP changes.

Instead of asking an AI tool to guess from a screenshot, a Figma MCP workflow may let the agent:

- inspect design context from a frame or component
- compare implementation against the design
- work with layout, components, and structure more directly
- generate or revise diagrams in FigJam

So Figma is not the only MCP worth knowing about.
It is just one of the easiest places to start.

## Student-contributed Figma MCP examples
Teddy Lane contributed two useful resources for the class:

- [Figma MCP Demo](https://youtu.be/ApfBy5EBqr0)
- [Teddy Lane - MCP Instructions.pdf](./Teddy%20Lane%20-%20MCP%20Instructions.pdf)

Thank you to Teddy Lane for sharing this with the class.
This supplement builds on his contribution by giving a little more context for how MCP might connect to the broader course and to your own project work.

Teddy's one-page guide is helpful because it shows:

- a simple setup path
- an example prompt for asking an AI tool to help with setup
- several concrete use cases for Figma MCP

## Other MCPs that may be relevant to this course
If your work is more design / prototyping / planning oriented, these MCPs are likely more relevant than highly technical infrastructure servers.

### Figma MCP
Useful for:

- design-to-code handoff
- reading design context
- working with diagrams or FigJam
- comparing implementation to design

### Playwright MCP
Useful for:

- testing a prototype in a real browser
- checking whether an interaction flow actually works
- gathering evidence about what the interface does

This is especially useful if your project is interactive and you want an agent to inspect behavior more directly.

### Notion MCP
Useful for:

- reading planning documents
- summarizing research notes
- helping with briefs, specs, or project documentation

This is a good fit if your project work lives heavily in documents and structured notes.

### GitHub MCP
Useful for:

- understanding repository context
- reading issues and pull requests
- helping an agent work with a real codebase more intelligently

This becomes more useful as your project becomes more code-based.

## A simple way to decide whether MCP is worth trying
An MCP is probably worth trying if:

- it connects to a tool you already use
- it solves a real bottleneck in your workflow
- it helps with design, prototyping, planning, testing, or implementation
- you can imagine one specific task you want to try with it

It is probably **not** worth trying yet if:

- you do not have a concrete use for it
- it requires a lot of setup before you know why you need it
- it feels more like technical novelty than project support

## How to find useful MCPs
Do not start by browsing random MCP servers.
Start with a problem in your own work.

For example:

- "I want the AI to see my Figma design directly."
- "I want the AI to test my prototype in a browser."
- "I want the AI to work from my Notion project notes."
- "I want the AI to understand my repo better."

Then look in this order:

1. Check whether the tool itself has an official MCP server.
2. Check whether your AI client already has a plugin, connector, or MCP gallery entry.
3. Check the official MCP Registry:
   - [Official MCP Registry](https://registry.modelcontextprotocol.io)
4. Prefer official or vendor-maintained servers when possible.

## How to ask your AI tool to help you connect one
You do not need to know every setup detail ahead of time.
Often the easiest path is to ask the AI client to guide you through setup.

A good general prompt is:

```text
I want to connect the [NAME] MCP server in [CLIENT].
Check whether this client supports it.
Walk me through setup one step at a time.
After setup, confirm the server is connected and list the available tools.
Then help me try one small task with it.
```

Another useful follow-up is:

```text
I have connected [NAME].
What tools does it expose?
Which of those are actually relevant to my project?
Suggest one low-risk first experiment.
```

## A good first experiment
Your first use should be narrow and easy to evaluate.

Examples:

- Figma: "Read this frame and summarize the layout and components."
- Playwright: "Open my prototype and tell me what happens when I complete this flow."
- Notion: "Read this project page and summarize the current plan."
- GitHub: "Look at this repo and explain the main project structure."

That is a much better first step than immediately asking the agent to do a large, multi-step workflow.

## Important caution
MCP can make AI tools more powerful because they have more context and more possible actions.
That also means you should be careful.

A few useful rules:

- prefer official servers when possible
- read what data or actions the server allows
- start with small tests
- review outputs instead of assuming they are correct
- be especially careful with anything that writes, edits, posts, or deletes

More capability does not remove the need for human judgment.

## A practical takeaway
You do not need to become an "MCP person" to benefit from this.

If this supplement is useful, the likely outcome is much smaller:

- you become aware that these connections exist
- you recognize one MCP that might help your project
- you try one small experiment
- you decide whether it is actually useful for your way of working

That is enough.
