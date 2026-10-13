# SkipLink

A link that lets keyboard users jump past the header straight to the page's main content. Renders a plain `<a>` that stays off-screen until it receives focus, then slides into the top corner of the viewport.

**Status:** complete

## When to use

- Once per page, as the first element in `<body>`. It's already rendered in the root layout (`src/app/layout.tsx`).
- It isn't a general in-page anchor; use a regular link for jumps within content.

## Used in

Every page, through the root layout.

## Import

```tsx
import { SkipLink } from '@/components/SkipLink';
```

## Basic usage

```tsx
// Targets Main, which has id="main" by default
<SkipLink />

// Custom target and label
<SkipLink href="#content">Skip to main content</SkipLink>
<Main id="content">...</Main>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | `'Skip to content'` | Link text |
| `href` | `string` | `'#main'` | Target fragment |
| `className` | `string` | — | Extra classes |

Other anchor attributes pass through.

## CSS classes

| Class | When applied |
|---|---|
| `wpc-skip-link` | Always |

It's hidden by translating it above the viewport, not with `display: none`, so it stays in the tab order and the accessibility tree. `:focus` slides it back in; the transition is off under `prefers-reduced-motion`.

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--spacing-x-small`, `--wpc--spacing-small` | Offset and padding |
| `--wpc--spacing-2x-small` | Focus outline offset |
| `--wpc--z-500` | Stacking above the header |
| `--wpc--font-family-sans`, `--wpc--font-size-small`, `--wpc--font-weight-semibold`, `--wpc--line-height-tight` | Typography |
| `--wpc--color-white`, `--wpc--color-forest` | Text and background |
| `--wpc--radius-md` | Corner radius |
| `--wpc--transition-fast` | Slide-in |

The hidden position uses `translateY(calc(-100% - var(--wpc--spacing-x-small)))`: the link's own height plus a small gap, so a fractional height can't leave a sub-pixel sliver at the top of the page.

## Accessibility

- A native `<a>` with an in-page `href`, so it works without JavaScript. It deliberately isn't a `next/link`: router links navigate between pages, not to a fragment.
- It must be the first focusable element so the first Tab lands on it.
- `Main` has `tabIndex={-1}` so following the link moves focus into the content, not just the scroll position. Give any other target `tabIndex={-1}` too.
- It sits outside every landmark, which axe's `region` rule flags; skip links are the accepted exception.
- White on forest is about 16:1.
