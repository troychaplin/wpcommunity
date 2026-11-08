# Figure

An image or media wrapper with an optional caption, a size and float alignment. Renders a semantic `<figure>`.

**Status:** complete

## When to use

- Images inside article content that need a caption, or should float beside the text.
- Full-width images in content.

## Used in

Not in the two designs yet; intended for content pages.

## Import

```tsx
import { Figure } from '@/components/Figure';
```

## Basic usage

```tsx
<Figure caption="WordCamp Canada 2025 organizers">
  <Image src="/wordcamp.jpg" alt="Organizers on stage" width={1200} height={800} />
</Figure>

<Figure size="sm" align="right">...</Figure>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Image or media |
| `caption` | `string` | — | Rendered in a `<figcaption>` |
| `size` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'full'` | Width: 320px, 440px, 512px, 48rem or 100% |
| `align` | `'none' \| 'left' \| 'right' \| 'center'` | `'none'` | Float alignment |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-figure`, `wpc-figure--{size}` | Always |
| `wpc-figure--{align}` | `align` isn't `none` |
| `alignleft` / `alignright` | `align="left"` / `"right"`; opts out of the constrained-layout auto margins so the float works |
| `wpc-figure__inner` | Wrapper with rounded corners |
| `wpc-figure__caption` | `caption` is set |

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--radius-md` | Corner radius |
| `--wpc--color-surface-tint`, `--wpc--color-text-muted`, `--wpc--font-size-small` | Caption background, text and size |
| `--wpc--spacing-x-small`, `--wpc--spacing-small` | Caption padding |
| `--wpc--spacing-medium`, `--wpc--spacing-large` | Float margins |

The size widths (320px, 440px, 512px, 48rem) are raw values, not tokens. That's a known gap carried over from Parlour.

## Responsive behaviour

Below the tablet breakpoint (960px) sized figures go full width and floats are dropped; floats apply above it.

## Accessibility

- Give the image meaningful `alt` text; the caption adds context but doesn't replace it.
- `<figure>` with a `<figcaption>` is announced as a figure with that caption.
