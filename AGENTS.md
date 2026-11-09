# AGENTS.md — React Essentials

Compact guide for future OpenCode sessions. It records only the facts an agent is likely to miss or get wrong.

## Quickstart

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies. |
| `npm run dev` | Start Vite at http://localhost:5173. |
| `npm run build` | Verify the production bundle. |

## Requirements

- Node.js 18+.
- npm (a `package-lock.json` is committed).

## Environment

- No environment variables are used.
- There is no lint or test script.

## Architecture

- `src/data.js` — all concept and example content.
- `src/App.jsx` — page composition and card list.
- `src/components/TopicsTabs/index.jsx` — tab state and example rendering.
- `src/components/Tabs/` — layout primitives.
- `src/components/CoreConcept/` — concept card.

## Commands and build order

- Use `npm run dev` for iteration and `npm run build` before finishing.
- There is no automated test or lint command.

## Conventions and gotchas

- Tab keys are lowercased titles; adding a concept without a matching `EXAMPLES` key causes a runtime error when selected.
- The random tagline changes on re-render; do not treat it as stable content.
- `Header.css` is a plain CSS import, not a CSS Module.
- The project uses `index.jsx` rather than `main.jsx`.

## Memory

- Read `MEMORY.md` first to understand the current status and decisions.
- Before changing behaviour, read `constitution.md` and keep the change aligned with it.
- After a task, update `MEMORY.md` with status, decisions, and mistakes to avoid. Keep it short.
- If a rule becomes permanent, move it into this file instead of leaving it in memory.
- Never store secrets, tokens, or personal data in `MEMORY.md`.
