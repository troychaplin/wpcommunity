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

Every section of both pages: plain sections on the stone page, the sage Slack and FAQ sections, the forest "Start a group" section and the Upcoming Gathering band.

## Import

```tsx
import { Container } from '@/components/Container';
```

## Basic usage

```tsx
// Default: content width, no background
<Container as="section">...</Container>

// Full-bleed sage section with wide content
<Container as="section" color="sage" maxWidth="alignfull" contentWidth="alignwide">...</Container>

// Dark band, boxed at content width with rounded corners
<Container color="forest" borderRadius="md">...</Container>

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
| `color` | `'white' \| 'stone' \| 'sage' \| 'blush' \| 'crimson' \| 'forest'` | — | A [surface](../../src/styles/mixins/_surfaces.scss): fill, paired border and tone; adds section padding |
| `borderRadius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'md'` | Corner radius (ignored on `alignfull`) |
| `border` | `'none' \| 'top' \| 'bottom' \| 'both' \| 'all'` | `'none'` | Rules in the tone's border colour. Needs `color`; `all` keeps only top and bottom on `alignfull` |
| `hasRule` | `boolean` | `false` | A rule down the content's start edge, with the content inset beside it, as in the "New here?" and FAQ sections. See [Ruled content](#ruled-content) |

## Surfaces

`color` takes a name from the shared surface set, the same names `Card` and `Button` use.

| `color` | Fill | `border` colour | Text roles |
|---|---|---|---|
| `white` | `white` | `stone-200` | Light |
| `stone` | `stone-50` (#faf8f4) | `stone-200` | Light |
| `sage` | `sage-50` (#eff4f0) | `sage-200` (also its border role) | Light |
| `blush` | `stone-50` + the `blush` gradient | `stone-200` | Light |
| `crimson` | `crimson-600` (#b01d33) | `crimson-700` | Crimson: white text, headings, links and focus; `crimson-100` muted text |
| `forest` | `forest-950` (#0f251b) | `forest-800` | Inverse: `forest-100` text, white headings, `forest-400` muted text, the light accent for links, eyebrows and focus |

A surface's tone re-declares the role tokens (`--wpc--color-text`, `-heading`, `-text-muted`, `-border`, `-border-hover`, `-accent`), so every child that reads a role adapts with no extra props.

## CSS classes

| Class | When applied |
|---|---|
| `wpc-layout wpc-container is-layout-constrained` | Always |
| `{maxWidth}` (e.g. `alignfull`) | Always |
| `wpc-container--{color}`, `wpc-container--no-gap` | `color` is set |
| `wpc-container--border-{border}` | `color` is set and `border` isn't `none` |
| `wpc-container--ruled` | `hasRule` is set |
| `wpc-container--radius-{name}` | Always; only takes effect when not `alignfull` |

The inner `<div>` carries `has-global-padding` and the `contentWidth` class, plus `has-root-padding` when `color` is set. Direct children of the inner div are spaced by `--wpc--root-block-gap`.

## Design tokens

| Token | Used for |
|---|---|
| `--wpc-surface-fill`, `--wpc-surface-border` | The surface's fill and the colour `border` rules are drawn in, set by `@include surface()` |
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

## Ruled content

`hasRule` draws a 1px rule down the content's start edge, in the section's `border` role (`stone-200` on the page, `sage-200` on sage), and insets the content beside it by `spacing-medium`. The rule sits on the page edge and the content moves in, as in the design's "New here?" and "Common questions" sections.

```tsx
<Container as="section" maxWidth="alignwide" contentWidth="alignwide" hasRule>
  <SectionHeader title="New here? Start with these." />
  <GridGroup columns={4} dividers="columns">…</GridGroup>
</Container>
```

The inset matches the inline padding a divided [`GridGroup`](./grid-group.md) gives its cells. A divided GridGroup directly inside is pulled back by it, so the rule becomes the grid's first column line and the cells' content lines up with the heading above. When the grid stacks on phones, its rules between cells run from the section rule to the far edge.

## Accessibility

- `<section>` is a landmark only when it has an accessible name. Add `aria-label` or `aria-labelledby` when the section should be reachable through landmark navigation, and give each named section a distinct label.
- Use `as="div"` to avoid landmark semantics entirely.
- On forest, body text is about 14:1 (`forest-100` on `forest-950`). The muted role is `forest-400` (#8fa79a), about 6:1 on forest and 5:1 on `forest-900` fields, so it passes AA for small text. The design's lichen (`forest-600`, about 3:1) stays in the palette but no role uses it.
- On crimson, text is white (6.84:1) and muted text `crimson-100` (5.85:1). The inverse tone's muted text and links would fail there, which is why crimson has its own tone.
