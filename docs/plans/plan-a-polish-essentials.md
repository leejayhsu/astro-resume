# Plan A — `feat/polish-essentials`

**Tier:** High impact, low effort.
**Goal:** Free polish using rock-solid, widely-supported CSS. No behavior-change risk.
**Depends on:** none.

## Scope

1. **`text-wrap` polish** — apply `text-wrap: balance` to `h1`, `h3`, `h4`; `text-wrap: pretty` to `.lead` and `.project-desc` (`public/assets/styles.css:254-287`).
2. **`color-mix(in oklch, …)` token refactor** — introduce `--bg`, `--surface`, `--border`, `--text`, `--text-muted` in `:root` (see `src/layouts/Layout.astro:24`), derived from a single `--base` via `color-mix`. Replace hardcoded `#161616`, `#1c1c1c`, `#353535`, `#2b2b2b`, `#a8a8a8` throughout `styles.css`.
3. **`@property` gradient sweep** — register `--angle` (`@property --angle { syntax: "<angle>"; initial-value: 0deg; inherits: false; }`) and animate it on `:hover` to drive a conic/linear-gradient border on `.icon-link` and `.projects-category-image-container` via `border-image` or a `::before` mask.
4. **Smooth scroll + reduced-motion guard** — `html { scroll-behavior: smooth; }` plus a `@media (prefers-reduced-motion: reduce)` block disabling animation/transition/scroll-behavior.
5. **Named View Transitions** — `ClientRouter` is already in `src/components/Header.astro:12`. Add `transition:name` directives to shared elements (e.g. `transition:name="sidebar"` on `Sidebar.astro` root, `transition:name="hero"` on `.fold-content`) so cross-page nav morphs instead of cross-fading wholesale.

## Verification

- `npm run lint`
- `npm run build`
- Manual: click index → experience → devops, confirm morph transitions; resize to 360px and 1440px; toggle reduced-motion in devtools.

## Suggested commits

1. `chore: add text-wrap polish + reduced-motion guard`
2. `refactor: oklch color tokens via color-mix`
3. `feat: animated gradient borders on icon links and project cards`
4. `feat: named view transitions for sidebar and hero`
