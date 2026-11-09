# React Essentials — Working Memory

_Last updated: 2026-11-02_

## Current status

- Core-concept cards and tabbed examples are implemented.
- All content is driven by `src/data.js`.
- No tests, lint script, or deployment workflow.

## Key decisions

- Kept the project dependency-light so component and state basics stay visible.
- Derived tab titles from `CORE_CONCEPTS` to keep the card list and tabs in sync.

## Known limitations and follow-ups

- No lint or test command.
- Debug `console.log` calls remain in components.
- No persistence or interactivity beyond tab selection.

## Mistakes to avoid

- Adding a concept without an `EXAMPLES` entry breaks the selected view.
- Expecting `npm run lint` to exist.
- Assuming `main.jsx` is the entry file; it is `index.jsx`.

## Next steps

- Remove the teaching `console.log` calls.
- Add a lint script and a small component test.
- Add a GitHub Pages workflow.

---

Keep this file under ~60 lines. Summarise or delete notes that no longer add value.
