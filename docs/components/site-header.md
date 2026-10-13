# SiteHeader

The header at the top of every page: the site title as a link home, the primary navigation, and an optional actions slot, in one row at the wide content width. Renders a `<header>`, with a `<nav aria-label="Primary">` when navigation links are passed.

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
  navItems={[
    { href: '/meetups', label: 'Meetups' },
    { href: '/submit', label: 'Submit a Group' },
    { href: '/story', label: 'Our Story' },
  ]}
>
  <LanguageToggle languages={languages} />
</SiteHeader>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `siteTitle` | `string` | `'WP Canada'` | Text of the home link |
| `siteTitleAccent` | `string` | — | Part of the title shown in crimson |
| `navItems` | `{ href: string; label: string }[]` | — | Primary navigation links |
| `children` | `ReactNode` | — | Actions slot at the end of the row |
| `className` | `string` | — | Extra classes |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-site-header` | Always |
| `wpc-site-header__branding` | Title wrapper |
| `wpc-site-header__title-accent` | `siteTitleAccent` matched part of the title |
| `wpc-site-header__nav` | `navItems` is non-empty |
| `wpc-site-header__actions` | `children` is set |

The row itself is a [`FlexGroup`](./flex-group.md) (`alignwide`, `space-between`, gap `small`).

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--color-canvas`, `--wpc--color-stone` | Background and bottom rule |
| `--wpc--font-family-serif`, `--wpc--font-size-x-large`, `--wpc--font-weight-semibold`, `--wpc--line-height-tight` | Wordmark |
| `--wpc--color-forest`, `--wpc--color-crimson` | Wordmark colour, accent and hover |
| `--wpc--font-family-sans`, `--wpc--font-size-medium`, `--wpc--font-weight-normal` | Nav links |
| `--wpc--color-text-muted`, `--wpc--color-text` (roles) | Nav links and their hover |
| `--wpc--spacing-x-small`, `--wpc--spacing-medium`, `--wpc--root-padding-x` | Padding (about 52px tall) and nav gap |
| `--wpc--transition-fast` | Nav hover |

The nav has `margin-inline-start: auto`, so it sits beside the actions at the end of the row rather than in the middle.

## Accessibility

- A top-level `<header>` is the `banner` landmark; keep it outside `Main`, one per page.
- The title is a paragraph holding a `rel="home"` link, not a heading, so the page keeps a single `<h1>`.
- `siteTitleAccent` wraps part of the text in a `<span>` without changing it, so it's announced as written.
- The nav is labelled "Primary"; give any other `<nav>` a different label (the footer's is "Footer").
- Links don't mark the current page with `aria-current` yet.

## Open questions

- Mobile navigation pattern: the designs don't show one. On phones the nav and toggle currently wrap onto extra lines (about 126px tall at 375px).
