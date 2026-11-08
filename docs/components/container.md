# Container

A page-level band that controls width, background tone and vertical rhythm. Nests inside [`Main`](./main.md) and wraps the content and layout components of one section. Width presets follow the WordPress alignment system.

**Status:** complete

## When to use

- Group a section's content into a band: a card grid, a split layout, a call-to-action strip.
- Use `maxWidth="alignfull"` with a `color` for full-bleed tinted or dark sections, and `contentWidth` to keep the content inside at a readable width.
- Without a `color`, a Container is a plain width wrapper: it sets the band's width and adds no padding.
- Add `border` to rule a toned band off from its neighbours.
- Stack Containers inside `Main` to build the page.

## Used in

Every section of both pages: canvas sections, the sage Slack and FAQ sections, the blush hero, the forest "Start a group" section and the Upcoming Gathering band.

## Import

```tsx
import { Container } from '@/components/Container';
```

## Basic usage

```tsx
// Default: content width, no background
<Container as="section">...</Container>

// Full-bleed sage section with wide content
<Container as="section" color="tint" maxWidth="alignfull" contentWidth="alignwide">...</Container>

// Dark band, boxed at content width with rounded corners
<Container color="inverse" borderRadius="md">...</Container>

// White band ruled top and bottom (full-width bands never get side borders)
<Container color="white" maxWidth="alignfull" contentWidth="alignwide" border="both">...</Container>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Section content |
| `as` | `'div' \| 'section' \| 'header' \| 'main' \| 'footer' \| 'article' \| 'nav' \| 'aside' \| 'ul' \| 'ol'` | `'div'` | Root element |
| `maxWidth` | `'alignsmall' \| 'aligncontent' \| 'alignwide' \| 'alignfull'` | `'aligncontent'` | Width of the band |
| `contentWidth` | same as `maxWidth` | `'aligncontent'` | Width of the content inside |
| `color` | `'white' \| 'canvas' \| 'tint' \| 'inverse' \| 'blush'` | — | Background tone; sets the role colours and section padding |
| `borderRadius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Corner radius (ignored on `alignfull`) |
| `border` | `'none' \| 'top' \| 'bottom' \| 'both' \| 'all'` | `'none'` | Rules in the tone's border colour. Needs `color`; `all` keeps only top and bottom on `alignfull` |

## Tones

| `color` | Background | `border` colour | Text roles |
|---|---|---|---|
| `canvas` | `canvas` (#faf8f4) | `stone` | Light |
| `white` | `white` | `stone` | Light |
| `tint` | `sage` (#eff4f0) | `sage-dark` (also its border role) | Light |
| `blush` | `canvas` + the `blush` gradient | `stone` | Light |
| `inverse` | `forest` (#0f251b) | `pine` | Inverse: mist text, white headings, lichen-light muted text, light accent for links, eyebrows and focus |

A tone re-declares the role tokens (`--wpc--color-text`, `-heading`, `-text-muted`, `-border`, `-accent`), so every child that reads a role adapts with no extra props.

## CSS classes

| Class | When applied |
|---|---|
| `wpc-layout wpc-container is-layout-constrained` | Always |
| `{maxWidth}` (e.g. `alignfull`) | Always |
| `wpc-container--{color}`, `wpc-container--no-gap` | `color` is set |
| `wpc-container--border-{border}` | `color` is set and `border` isn't `none` |
| `wpc-container--radius-{name}` | Always; only takes effect when not `alignfull` |

The inner `<div>` carries `has-global-padding` and the `contentWidth` class, plus `has-root-padding` when `color` is set. Direct children of the inner div are spaced by `--wpc--root-block-gap`.

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--color-white`, `--wpc--color-canvas`, `--wpc--color-sage`, `--wpc--color-forest`, `--wpc--gradient-blush` | Tone backgrounds |
| `--wpc--color-stone`, `--wpc--color-sage-dark`, `--wpc--color-pine` | `border` rules, set per tone in `--wpc-container-border` |
| `--wpc--spacing-2x-large` | Block padding of toned sections |
| `--wpc--root-padding-left`, `--wpc--root-padding-right` | Inline padding of full-width Containers, and of boxed toned ones on small screens |
| `--wpc--spacing-large` | Inline padding of boxed toned Containers above the tablet breakpoint |
| `--wpc--root-block-gap` | Rhythm between blocks inside |
| `--wpc--spacing-medium`, `--wpc--spacing-large` | Spacing between stacked Containers |
| `--wpc--radius-*` | Generated radius modifiers |

## Width and padding

Every layer of the page shares one content edge, the root padding: `Main`, the site header and the footer all inset by it.

| Container | Inline padding | Content edge |
|---|---|---|
| No `color` | None (`Main`'s padding applies) | The page edge |
| `alignfull` | The root padding, put back after breaking out of `Main`'s | The page edge, at every width |
| Boxed (`aligncontent` / `alignwide`) with a `color` | The root padding on small screens, `spacing-large` above the tablet breakpoint | Inset from the panel's edges, which sit on the page edge |

So wide content in a plain section, a full-width toned band and the header all line up, and narrow (`aligncontent`, 768px) content centres on the same axis.

## Accessibility

- `<section>` is a landmark only when it has an accessible name. Add `aria-label` or `aria-labelledby` when the section should be reachable through landmark navigation, and give each named section a distinct label.
- Use `as="div"` to avoid landmark semantics entirely.
- Inverse text roles keep body text at about 14:1 (mist on forest). The muted role is `lichen-light` (#8fa79a), about 6:1 on forest and 5:1 on forest-light fields, so it passes AA for small text. The design's lichen (about 3:1) is kept as a palette colour but no role uses it.
