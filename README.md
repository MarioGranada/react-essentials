# React Essentials

A compact React refresher that presents the four core concepts — components, JSX, props, and state — as cards, with a tabbed examples panel that shows a description and code snippet for each one.

The project is intentionally small: it focuses on component composition, list rendering, conditional rendering, and state-driven tab selection.

> **Follow-along project.** This app was built while following **React — The Complete Guide (Academind / Maximilian Schwarzmüller)**. It is included in the portfolio as a learning exercise, not as a production product. The implementation is my own work based on the course material.

## Live demo

| | |
| --- | --- |
| **Live site** | https://mariogranada.github.io/react-essentials/ |
| **Repository** | https://github.com/MarioGranada/react-essentials |
| **Portfolio summary** | Compact React refresher that presents components, JSX, props and state as data-driven cards with a tabbed panel of explanations and code examples. |

## Features

- Core-concept cards rendered from a data array.
- Tabbed examples panel with descriptions and code snippets.
- Selected-tab state with conditional content.
- Reusable `Tabs`, `TabButton`, and `CoreConcept` components.
- Randomised header tagline to demonstrate render-time logic.
- Plain CSS with a small responsive layout.

## Tech stack

| Layer | Technology |
| --- | --- |
| Framework | React 18 + Vite |
| Language | JavaScript (JSX) |
| Styling | Plain CSS |
| Data | Local module (`src/data.js`) |

## Project structure

```text
react-essentials/
├── src/
│   ├── components/
│   │   ├── Header/            # Header.jsx + Header.css
│   │   ├── CoreConcept/
│   │   ├── Tabs/              # Tabs + TabContentContainer
│   │   ├── TabButton.jsx
│   │   └── TopicsTabs/        # Selected-topic state and example rendering
│   ├── data.js                # CORE_CONCEPTS and EXAMPLES
│   ├── App.jsx
│   ├── index.jsx
│   └── index.css
├── index.html
└── vite.config.js
```

## Getting started

### Requirements

- Node.js 18+.
- npm (a `package-lock.json` is committed).

### 1. Install dependencies

```bash
npm install
```

### 2. Run locally

**Start the development server**

```bash
npm run dev
```

Open http://localhost:5173.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start Vite on port 5173. |
| `npm run build` | Build the app into `dist/`. |
| `npm run preview` | Preview the production build. |

## How it works

`src/data.js` is the single content source: `CORE_CONCEPTS` drives the cards and `EXAMPLES` supplies the tab descriptions and code.

`App.jsx` maps over `CORE_CONCEPTS` to render `CoreConcept` cards and derives the tab titles from the same data before passing them to `TopicsTabs`.

`TopicsTabs` owns `selectedTopic`, renders a `TabButton` per title, and shows a prompt, a description, and a `<pre><code>` block depending on the selection.

`Tabs` and `TabContentContainer` are layout components: they render the tab list and the content area without knowing what is selected.

## Deployment

- **Live:** `.github/workflows/deploy.yml` builds the app on every push to the default branch and publishes `dist/` (plus a `404.html` SPA fallback) to the `gh-pages` branch, which GitHub Pages serves at https://mariogranada.github.io/react-essentials/.
- Target: GitHub Actions can build the Vite app and publish `dist/` to GitHub Pages.
- Set the Vite `base` option to the repository path for a project Pages site.
- No backend, routing, or database is required.

## Notes and limitations

- There is no lint script in `package.json`; only dev, build, and preview exist.
- `console.log` statements in `App.jsx` and `TabButton.jsx` are intentional teaching aids and should be removed for a polished build.
- The header tagline is random on every render, so it can change after any state update.
- All content is static; there is no data fetching.

---

**Author:** Mario Granada
