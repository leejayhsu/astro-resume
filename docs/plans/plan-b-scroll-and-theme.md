# Plan B — `feat/scroll-and-theme`

**Tier:** Medium effort, high wow.
**Goal:** Scroll-driven animation + automatic light/dark theme via container queries.
**Depends on:** conceptually reuses Plan A's token idea, but can be implemented independently by redefining tokens inline.

## Scope

1. **Container-query layout** — add `container-type: inline-size` (and `container-name: shell`) to `.content`. Convert the `@media (max-width: 991px)` and `@media (max-width: 767px)` blocks at `public/assets/styles.css:706` and `:791` into `@container shell (max-width: …)` so the sidebar/main layout adapts to its container rather than viewport (useful when embedded/iframed).
2. **Scroll-driven reveals** — on `.container > *`, define `@keyframes reveal { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: none; } }` and apply `animation: reveal both; animation-timeline: view(); animation-range: entry 0% cover 30%;`. Also a thin scroll progress bar fixed to top using `animation-timeline: scroll(root)`.
3. **`light-dark()` + `prefers-color-scheme`** — define `color-scheme: light dark;` on `:root`, then rewrite tokens as `--bg: light-dark(#161616, #f7f7f8);` etc. Verify the existing `grid-top-right.svg` overlay still reads on light bg (may need an `invert(1)` filter via `prefers-color-scheme`).
4. **`scroll-snap` carousel for narrow layouts** — at the 767px container breakpoint, switch `.projects-section` to `display: flex; flex-direction: column; scroll-snap-type: y proximity;` with each `.projects-container { scroll-snap-align: start; }`.

## Verification

- `npm run lint`
- `npm run build`
- Manual: scroll the main panel, watch reveals + progress bar; toggle OS light/dark; resize narrow to see snap carousel.

## Suggested commits

1. `refactor: container-query based shell layout`
2. `feat: scroll-driven section reveals and progress bar`
3. `feat: automatic light/dark theme via light-dark()`
4. `feat: scroll-snap project list on narrow containers`
