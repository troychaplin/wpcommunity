# Main

The primary page content wrapper. Renders the `<main>` landmark with an inner layout div wired into the WordPress alignment and spacing system. Every section of a page nests inside it.

**Status:** complete

## When to use

- Once per page, between the [`SiteHeader`](./site-header.md) and [`SiteFooter`](./site-footer.md).
- Use `hasPadding={false}` when the first section is full-bleed and should run to the header (the homepage hero).

## Used in

Both pages, wrapping everything between header and footer.

## Import

```tsx
import { Main } from '@/components/Main';
```

## Basic usage

```tsx
<Main>
  <Container as="section">...</Container>
</Main>

<Main hasPadding={false}>
  <Container color="blush" maxWidth="alignfull">...</Container>
</Main>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Page sections |
| `hasPadding` | `boolean` | `true` | Block padding above and below the content |
| `id` | `string` | `'main'` | Target for the [`SkipLink`](./skip-link.md) |
| `tabIndex` | `number` | `-1` | Lets the skip link move focus into `<main>` |
| `className` | `string` | — | Extra classes |

## Inner layout div

`Main` wraps its children in:

```html
<div class="alignfull has-global-padding is-layout-constrained entry-content">
```

| Class | Effect |
|---|---|
| `alignfull` | `max-width: var(--wpc--layout-full-size)` |
| `has-global-padding` | Root inline padding; lets `alignfull` children break out of it |
| `is-layout-constrained` | Children get the content width; `alignwide` children the wide width; block gap and heading flow spacing |
| `entry-content` | Prose rhythm between stacked children |

These rules come from the c2b-generated `wpc-layout.css` and `wpc-typography.css`, mirroring WordPress's layout system.

## CSS classes

| Class | When applied |
|---|---|
| `wpc-main` | Always |
| `wpc-main--padding` | `hasPadding` |

`wpc-main` styles prose links (`a` without a class): semibold, underlined on hover. Component links carry their own classes and styles.

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--spacing-x-large` | Block padding |
| `--wpc--spacing-medium` | Margin between stacked direct children |
| `--wpc--font-weight-semibold` | Prose link weight |
| `--wpc--transition-normal` | Prose link colour transition |

## Accessibility

- `<main>` is a landmark; use exactly one per page.
- `id="main"` and `tabIndex={-1}` let the skip link move keyboard focus into it. `tabIndex={-1}` keeps it out of the tab order, and its focus outline is removed because it isn't interactive.
- The inner layout div is presentational.
