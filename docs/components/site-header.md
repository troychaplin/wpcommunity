# SiteHeader

The header at the top of every page: the site title as a link home, the primary navigation, and an optional actions slot, in one row at the wide content width. Renders a `<header>`, with a `<nav aria-label="Primary">` when navigation links are passed. Below the tablet breakpoint the nav and actions fold into a panel behind a Menu button.

**Status:** complete

## When to use

- Open every page with it, above [`Main`](./main.md) rather than inside it.
- Pass extra controls as `children`; they sit at the end of the row, after the nav. The segmented [`LanguageToggle`](./language-toggle.md) goes here.
- Not for page or section headings; see [`SectionHeader`](./section-header.md).

## Used in

Both pages: "WP Canada" wordmark, Meetups / Submit a Group / Our Story nav, EN / FR toggle.

## Import

```tsx
import { SiteHeader } from '@/components/SiteHeader';
```

## Basic usage

```tsx
<SiteHeader
  homeHref="/en"
  navItems={[
    { href: '/en/groups', label: 'Meetups' },
    { href: '/en#start-a-group', label: 'Submit a Group' },
    { href: '/en#new-here', label: 'Our Story' },
  ]}
>
  <LocaleSwitcher locale="en" label="Language" />
</SiteHeader>
```

The `:lang` layout route (`src/app/routes/lang-layout.tsx`) renders it with the dictionary's labels and the router's current path.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `siteTitle` | `string` | `'WP Canada'` | Text of the home link |
| `siteTitleAccent` | `string` | — | Part of the title shown in crimson |
| `homeHref` | `string` | `'/'` | Target of the title link (the locale's homepage) |
| `currentPath` | `string` | `''` | The current path; the mobile menu closes when it changes. Pass the router's pathname |
| `navItems` | `{ href: string; label: string }[]` | — | Primary navigation links |
| `navLabel` | `string` | `'Primary'` | Accessible name of the nav |
| `menuLabel` | `string` | `'Menu'` | Menu button text while the panel is closed |
| `closeLabel` | `string` | `'Close'` | Menu button text while the panel is open |
| `children` | `ReactNode` | — | Actions slot at the end of the row |
| `className` | `string` | — | Extra classes |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-site-header` | Always |
| `wpc-site-header__branding` | Title wrapper |
| `wpc-site-header__title-accent` | `siteTitleAccent` matched part of the title |
| `wpc-site-header__menu`, `__menu--open` | Wraps the toggle and panel; `display: contents` so both join the row |
| `wpc-site-header__toggle` | The Menu button (hidden above tablet) |
| `wpc-site-header__panel` | Holds the nav and actions |
| `wpc-site-header__nav` | `navItems` is non-empty |
| `wpc-site-header__actions` | `children` is set |

The row itself is a [`FlexGroup`](./flex-group.md) (`alignwide`, `space-between`, gap `small`). The toggle state lives in a small client component, `SiteHeaderMenu`, that wraps the nav and actions. It records the path the menu was opened on, so a change to `currentPath` closes it.

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--color-stone-50`, `--wpc--color-stone-200` | Background and bottom rule |
| `--wpc--font-family-serif`, `--wpc--font-size-x-large`, `--wpc--font-weight-semibold`, `--wpc--line-height-tight` | Wordmark |
| `--wpc--color-forest-950`, `--wpc--color-crimson-600` | Wordmark colour, accent and hover |
| `--wpc--font-family-sans`, `--wpc--font-size-medium`, `--wpc--font-weight-normal` | Nav links |
| `--wpc--color-text-muted`, `--wpc--color-text` (roles) | Nav links and their hover |
| `--wpc--spacing-x-small`, `--wpc--spacing-medium`, `--wpc--root-padding-x` | Padding (about 52px tall) and nav gap |
| `--wpc--transition-fast` | Nav hover |

## Responsive behaviour

- Below the tablet breakpoint (960px), the Menu button sits at the end of the row and the panel is hidden. Opening it shows the nav and actions as a full-width column under the row.
- From tablet up, the button is hidden and the panel lays out inline with `margin-inline-start: auto`, so the nav sits beside the actions at the end of the row.

## Accessibility

- A top-level `<header>` is the `banner` landmark; keep it outside `Main`, one per page.
- The title is a paragraph holding a `rel="home"` link, not a heading, so the page keeps a single `<h1>`.
- `siteTitleAccent` wraps part of the text in a `<span>` without changing it, so it's announced as written.
- The nav is labelled by `navLabel` ("Primary"); give any other `<nav>` a different label (the footer's is "Footer").
- The Menu button has `aria-expanded` and `aria-controls` pointing at the panel, and its text switches between `menuLabel` and `closeLabel`. Escape closes the panel and returns focus to the button; following a link closes it too.
- Links don't mark the current page with `aria-current` yet.
