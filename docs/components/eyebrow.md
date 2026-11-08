# Eyebrow

A small mono label in sentence case: card regions, section eyebrows, dates, stat and field labels. Renders a `<p>` by default, or the element set by `as`.

**Status:** complete

## When to use

- A short label above or beside content: "Ontario", "Community channel", "primary group contact", "Sept 12".
- Use `tone="accent"` for category and section eyebrows, and the default `muted` tone for supporting labels and counts.
- Not for links ([`TextLink`](./text-link.md) with `font="mono"`) or badges ([`Pill`](./pill.md)).

## Used in

Group card regions, the Slack section and Upcoming Gathering eyebrows, contact and stat labels, resource labels, fieldset and FAQ group labels, update dates, "Showing 6 of 23 groups". [`SectionHeader`](./section-header.md) uses it for its prefix and meta.

![Eyebrow and links on a group card](./images/eyebrow-text-link.png)

## Import

```tsx
import { Eyebrow } from '@/components/Eyebrow';
```

## Basic usage

```tsx
<Eyebrow tone="accent">Ontario</Eyebrow>
<Eyebrow>primary group contact</Eyebrow>
<Eyebrow as="time" dateTime="2026-09-12">Sept 12</Eyebrow>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Label text |
| `as` | `'p' \| 'span' \| 'div' \| 'time'` | `'p'` | Element |
| `tone` | `'muted' \| 'accent'` | `'muted'` | Colour |
| `dateTime` | `string` | — | Machine-readable date when `as="time"` |

Other HTML attributes pass through.

## CSS classes

| Class | When applied |
|---|---|
| `wpc-eyebrow` | Always |
| `wpc-eyebrow--{tone}` | Always |

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--font-family-mono`, `--wpc--font-size-x-small`, `--wpc--font-weight-normal`, `--wpc--line-height-snug` | Typography (13–14px) |
| `--wpc--color-text-muted` (role) | Muted tone |
| `--wpc--color-accent` (role) | Accent tone: crimson on light, the light accent on inverse |

## Accessibility

- Write labels in normal sentence case; the design doesn't transform them, and text typed in capitals can be read out letter by letter.
- Use `as="time"` with `dateTime` for dates so they're machine-readable.
- Muted eyebrows are about 5:1 on light surfaces and about 6:1 on inverse ones (`lichen-light` on forest).
