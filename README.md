# Portfolio — Anay Maurya

A backend-focused portfolio built with React + Vite, styled as engineering documentation rather than a product landing page. Content is a single-source data file derived from real, verifiable information (resume, GitHub repos, project READMEs) — no invented numbers.

## Tech stack

- **React 18 + Vite 4** — no router, section-based navigation
- **CSS Modules** — component-scoped styles + a shared design-token file (`src/vars.css`)
- **Fonts** (via `@fontsource`): Space Grotesk (display), IBM Plex Sans (body), JetBrains Mono (code/labels/tags)

## Design system (codename: INDEX)

The visual identity maps to the request / process / response lifecycle of a backend system:

- `#5B6EF5` request-blue — primary accent (links, active nav, focus)
- `#E8A33D` process-amber — in-development / highlight (status pill for active projects)
- `#2BB673` response-teal — shipped/done states, used sparingly
- `#E5484D` alert-red — reserved for real errors only

Dark mode is the default; light mode keeps the same accents. Radii stay small (2px pills, 6px cards), spacing uses a 4px scale, and motion is minimal (120–200ms transitions).

## Project structure

```
src/
├── data/content.js        # single source of all content (identity, skills, projects, …)
├── vars.css               # design tokens (both themes)
├── App.jsx                # theme state (dark default, persisted to localStorage)
├── components/
│   ├── BookLayout/        # top bar nav, numbered sections, pager, footer
│   ├── chapters/          # one component per section (intro…contact)
│   └── ui/                # primitives: StatusPill, DataBlock, Footnote, StatGrid, Tag, …
```

Content lives in `src/data/content.js` — update that file to change the site. Project status pills are driven by the `status` field on each project (`active` → amber, `shipped` → teal, `archived` → gray). Don't mark a project `shipped` unless it's genuinely complete.

## Getting started

```bash
npm install
npm run dev        # local dev server
npm run build      # production build → dist/
npm run preview    # preview the production build
npm run lint       # eslint, zero-warning policy
```

## Deployment

Hosted on **Vercel** (auto-deploys on push to `main`):

- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

`node_modules/` and `dist/` are gitignored and never committed.