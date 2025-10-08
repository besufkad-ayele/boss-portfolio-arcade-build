# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/c09a8a74-311d-4291-b342-655e5f99b857

# Boss Portfolio — Arcade Build

![Portfolio Screenshot](public/portfolio_image.png)

An elegant, responsive developer portfolio built with React, TypeScript, Vite, Tailwind CSS and shadcn/ui. This repository contains the source for a single-page portfolio site with components for Hero, About, Projects, Experience, Skills, Contact and an arcade-style game sidebar.

Why this README is great:
- Clear setup steps for local development
- A friendly project overview and feature list
- A screenshot (above) so you know what to expect

## Quick links

- Live preview (dev server): http://localhost:8080/

## Features

- Fast development with Vite
- TypeScript + React
- Component library: shadcn/ui (Tailwind-powered)
- Custom UI components in `src/components` (Navbar, Hero, Projects, Footer, etc.)
- Small arcade-style mini-game in the sidebar (see `GameSidebar`)

## Screenshot

The screenshot above is the production-like build of the portfolio. The image file used is `public/portfolio_image.png`.

## Local development (Windows / PowerShell)

1. Clone the repository and open a terminal in the project root.

```powershell
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies and run the dev server:

```powershell
npm install
npm run dev
```

Open http://localhost:8080/ in your browser. If Vite reports a different port, use that URL instead.

Tip: If you see errors about missing packages like `react-icons/fa`, install them with:

```powershell
npm install react-icons
```

## Available npm scripts

- `npm run dev` — start Vite dev server
- `npm run build` — create a production build (via Vite)
- `npm run preview` — locally preview the production build

## Troubleshooting

- Missing imports: if Vite errors list an imported package as "could not be resolved", install the package (for example `react-icons`) and restart the dev server.
- Port conflicts: Vite usually picks a new port if 5173/8080 is taken—check the terminal output for the correct address.
- Node / npm versions: use a modern Node.js (v18+) and npm. Use `nvm` to manage Node versions.

## Project structure (high level)

- `src/` — React + TypeScript source
	- `components/` — UI components used across the site
	- `pages/` — route pages
	- `hooks/`, `lib/` — utilities and hooks
- `public/` — static assets (including `portfolio_image.png`)
- `index.html`, `vite.config.ts`, `package.json` — project config

## Contributing

1. Fork the repo and create a feature branch.
2. Make your changes and add clear commit messages.
3. Open a pull request with a concise description of your changes.

## License & Acknowledgements

This project uses OSS packages—see `package.json` for full dependency details. Thanks to the Vite, React, Tailwind and shadcn-ui communities.

---

If you want, I can also:

- Add badges (build / license / npm version)
- Add a short CONTRIBUTING.md or CODE_OF_CONDUCT.md
- Add GitHub Actions for CI build previews

If you'd like one of those, tell me which and I'll add it.
