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
- Components in `src/components/` must stay router-free: render links with `Link` from
  `src/components/LinkProvider`, never `react-router`'s, so the same components work in Storybook
  and c2b. The app supplies React Router's Link through `LinkProvider` in `src/app/root.tsx`.
- Every component has a `ComponentName.stories.tsx` beside it. Shared sample content lives in
  `src/stories/fixtures.ts`; reference static files with relative paths (`globe.svg`) so they resolve
  under the GitHub Pages base path.
