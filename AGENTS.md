## Stack

Vite + React Router 8.5.1 in framework mode, prerendered to static HTML (`ssr: false` in
`react-router.config.ts`). There is no runtime server.

- Read the React Router guides in `node_modules/react-router/docs/` before writing routing code; the
  framework-mode APIs may differ from your training data.
- Routes are declared in `src/app/routes.ts`. Every path that should ship as HTML must be listed in
  the `prerender` array in `react-router.config.ts`.
- With `ssr: false`, route modules can't export `action` or `headers`. Loaders run at build time.
- Page metadata uses React 19's built-in `<title>`, `<meta>` and `<link>` elements through
  `src/app/PageMeta.tsx`, not the route `meta` export.
- Colours: the palette is `{family}-{step}` (crimson, forest, sage, stone, plus white), and a step
  means the same lightness in every family. Components read roles (`--wpc--color-text`, `-border`,
  `-border-hover`…) or a surface, never a palette step, for anything that should follow its
  section. The surfaces (white, stone, sage, blush, crimson, forest) are defined once in
  `src/styles/mixins/_surfaces.scss`; Container `color`, Card `backgroundColor` and Button `color`
  take those names. Apply one with `@include surface(name)`, or `surface-vars(name)` for the
  `--wpc-surface-*` variables only.
- Components in `src/components/` must stay router-free: render links with `Link` from
  `src/components/LinkProvider`, never `react-router`'s, so the same components work in Storybook
  and c2b. The app supplies React Router's Link through `LinkProvider` in `src/app/root.tsx`.
- Every component has a `ComponentName.stories.tsx` beside it, titled
  `Components/<Group>/<Spaced Name>` with the group from the inventory in
  `docs/components/README.md` (add new groups to `storySort` in `.storybook/preview.ts`). Shared
  sample content lives in `src/stories/fixtures.ts`; reference static files with relative paths
  (`globe.svg`) so they resolve under the GitHub Pages base path.
- Overview pages live in `src/stories/`: `About.mdx` and the Stylebook in `src/stories/stylebook/`,
  whose components read token names and values straight from `c2b.config.json`.
- Pages are built in four layers. Components (`src/components/`) are router-free and data-free.
  Features (`src/features/`) are interactive app code that reads the locale and data itself.
  Patterns (`src/patterns/<page>/`) are one page section each: they own their `Container`, layout
  and data mapping, read `useI18n()` and `@/data` themselves, and take only what differs per page
  (a `group`). Routes (`src/app/routes/`) render `PageMeta` and their patterns in order, with no
  inline data mapping. The homepage's section ids live in `src/patterns/home/sections.ts`.
- Every pattern has a `PatternName.stories.tsx` beside it, titled `Patterns/<Page>/<Spaced Name>`,
  using `patternMeta` and `withPattern()` from `src/stories/patternDecorator.tsx` (set `title` and
  `tags: ['!autodocs']` in the file itself; Storybook reads them statically). Add new pages and
  patterns to the `Patterns` entry of `storySort`, in page order.
- Page templates live in `src/templates/`, titled `Overview/Templates`. They render the app's real
  route modules through React Router's `createRoutesStub` rather than re-composing the page, so
  they stay in sync with the site; give each template its own story export.
