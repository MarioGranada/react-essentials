# Project Constitution — React Essentials

This document defines the non-negotiable foundations for this repository. Read it before adding or changing features.

## Guiding Principles

- **Simplicity first** — prefer the smallest solution that solves the problem. If a change needs a long explanation, it is probably over-engineered.
- **No hardcoded secrets or endpoints** — configuration belongs in environment variables; visual design tokens belong in styles, not in `.env` files.
- **Traceability** — every value, dependency, and route should make its origin and purpose obvious.
- **Debuggability** — fail loudly and visibly; avoid silent fallbacks that hide broken data.
- **Official patterns** — use the documented API of each framework and library before inventing a workaround.
- **Portfolio clarity** — this repository is part of a public portfolio. Code should read as clean, intentional, and easy for a reviewer to follow. As a follow-along project, its purpose is to demonstrate the concepts practised in the course, not to imitate production scale.

## Technology Stack Foundations

| Layer | Choice | Rationale |
| --- | --- | --- |
| Framework | React 18 + Vite | Minimal setup for a concepts refresher. |
| Language | JavaScript (JSX) | Matches the course’s essentials section. |
| Styling | Plain CSS | Keeps the focus on component structure. |
| Data | Local module (`src/data.js`) | Content and examples are static and colocated. |

**Rule of thumb:** a new dependency must solve a concrete problem that the current stack cannot solve cleanly. Justify it in the change that introduces it.

## Core Premises

### 1. Scope

A teaching project for React essentials. It should stay small and readable; routing, data fetching, and state libraries would obscure its purpose.

### 2. Environment Isolation

- This project has no runtime secrets. Do not introduce `.env` files unless a real secret or environment-specific URL appears.
- If configuration is added, use environment variables and document them in the README.
- Never commit keys, tokens, database URLs, or credentials.

### 3. Architecture

- Content belongs in `src/data.js`; components should not hardcode concept text.
- Keep presentational components free of selection logic; `TopicsTabs` owns the selected tab.
- Prefer composition over a single large component.

### 4. Data and State

- All content is static and imported at build time.
- Only `selectedTopic` is state; it resets on reload.
- No persistence or network access.

### 5. Styling and UX

- Global styles live in `src/index.css`; the header has its own stylesheet.
- Keep the card grid readable on narrow screens.
- Code blocks must preserve whitespace and remain scrollable.

### 6. Quality Gates

- `npm run build` is the only automated gate.
- Manually check every tab, the unselected prompt, and the responsive card layout.
- Confirm that adding a new concept also adds a matching example.

### 7. Deployment

- Build with Vite and publish `dist/` through GitHub Actions.
- Configure the base path for GitHub Pages.
- No server runtime is required.

## What to Avoid

- Adding routing or data fetching to a static concepts page.
- Hardcoding concept text outside `src/data.js`.
- Treating the random tagline as deterministic content.
- Adding a UI library that hides the component fundamentals.

## Checklist Before Adding Anything New

- Does this solve a real problem for this project, or am I adding scope for its own sake?
- Is every new value configuration-driven rather than hardcoded?
- Does the change follow the existing folder and naming patterns?
- Is there a clear failure path when data, the network, or the environment is unavailable?
- Have I run the available lint/build/test command and fixed what it reports?
- Did I update `README.md` and `MEMORY.md` if behaviour or setup changed?

## Philosophy Statement

This repository exists to show thoughtful front-end engineering: clear structure, readable code, and deliberate trade-offs. The goal is not to use every tool available, but to make every file explain itself. Simplicity is the feature.
