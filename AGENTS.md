# Repository Instructions

`AGENTS.md` is the source of truth for agent instructions in this repo.
`CLAUDE.md` should remain a symlink to this file.

## Project

This is an Astro resume site deployed to Cloudflare Workers.

## Commands

- `npm run dev` starts the local development server.
- `npm run build` builds the site into `dist/`.
- `npm run lint` runs ESLint with fixes and `astro check`.
- `npm run format` formats the repository with Prettier.

## Conventions

- Public assets live in `public/assets/` and should be referenced with root-relative paths such as `/assets/example.svg`.
- Keep changes scoped to the requested behavior.
- Do not commit generated build output unless explicitly requested.
