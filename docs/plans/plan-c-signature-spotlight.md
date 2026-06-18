# Plan C — `feat/signature-spotlight`

**Tier:** Ambitious / signature.
**Goal:** Premium, "how'd they do that" feel — animated grain, glass spotlight, deeper gradient borders, 3D tilt.
**Depends on:** reuses Plan A's `@property` gradient border and Plan B's color tokens; can be implemented after either.

## Scope

1. **Animated grain layer** — add a fixed, full-viewport `<div class="grain">` to the layout, styled with an inline SVG `feTurbulence` data-URI background. Animate `background-position` via stepped `@keyframes` for a film-grain flicker. Keep `opacity: 0.04` and `mix-blend-mode: overlay`; gate behind `prefers-reduced-motion`.
2. **Glass spotlight cursor** — register `@property --mx` and `--my` (`<length>`) on `.main`. Add a tiny vanilla `<script>` (Astro inline) on `.main` that sets `--mx`/`--my` from `pointermove` (rAF-throttled). Then `.main::before` is a `radial-gradient(circle at var(--mx) var(--my), color-mix(in oklch, var(--accent) 12%, transparent), transparent 40%)` that follows the cursor, lighting up the background grid.
3. **`:has()`-aware card highlight** — `.projects-section:has(.projects-container:hover) .projects-container:not(:hover) { opacity: 0.55; transition: opacity 200ms; }` so siblings dim when one card is hovered. Add a `:focus-within` variant for keyboard.
4. **Magnetic / depth hover** — on `.projects-category-image-container:hover`, `transform: perspective(800px) rotateX/rotateY` driven by `--mx`/`--my` relative to the card (same handler). Subtle 3D tilt on the icon container.
5. **`transition:persist` shell** — `transition:persist` on `.sidebar` so it stays put across route changes. The spotlight + grain layer should also live in a persisted shell so they don't reset between pages.

## Verification

- `npm run lint`
- `npm run build`
- Manual: move cursor across `.main`, confirm spotlight tracks and cards tilt; hover a project card and confirm siblings dim; verify reduced motion disables grain + tilt; check perf in Performance panel (target < 16ms frame).

## Suggested commits

1. `feat: animated film-grain overlay`
2. `feat: pointer-tracking glass spotlight on main panel`
3. `feat: has()-driven sibling dim on project cards`
4. `feat: 3D tilt on project icon container`
5. `feat: persist sidebar and ambient layers across view transitions`
