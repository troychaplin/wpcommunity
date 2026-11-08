# GridGroup

A CSS grid that lays its children out in equal-width columns and collapses to one column on small screens. Renders a `<div>` by default, or the element set by `as`. It mirrors the grid half of the WordPress Group block; [`FlexGroup`](./flex-group.md) covers the flex half.

**Status:** complete

## When to use

- Lay out a collection of equal items (cards, features, resources) in rows of up to `columns`.
- Use it when the column count should follow the screen size.
- Use [`FlexGroup`](./flex-group.md) for content-sized items in a row, and [`Column`](./column.md) for fixed splits such as one-third and two-thirds.

## Used in

Homepage group cards (3), "New here?" features (4), local resources (4), organizing team (3).

## Import

```tsx
import { GridGroup } from '@/components/GridGroup';
```

## Basic usage

```tsx
<GridGroup as="ul" columns={4}>
  <Card as="li">...</Card>
  <Card as="li">...</Card>
</GridGroup>

<GridGroup columns={3} gap="large" rowGap="medium">...</GridGroup>

// Lines between cells instead of gaps (the homepage group grid)
<GridGroup columns={3} dividers="all">
  <GroupCard … />
</GridGroup>

// A framed table of dark Cards on a forest section, flush against forest-800 lines
<GridGroup columns={3} dividers="framed" dividerColor="forest" cellPadding={false}>
  <Card backgroundColor="forest" border={false} borderRadius="none">…</Card>
</GridGroup>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Grid items |
| `as` | `'div' \| 'section' \| 'ul' \| 'ol'` | `'div'` | Root element |
| `columns` | `1 \| 2 \| 3 \| 4` | `3` | Maximum columns |
| `gap` | spacing key or `'none'` | `'medium'` | Gap between items |
| `rowGap` | spacing key or `'none'` | — | Overrides the row gap |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | — | `align-items` |
| `maxWidth` | `'alignsmall' \| 'aligncontent' \| 'alignwide' \| 'alignfull'` | — | Width class; the grid centres only when one is set |
| `dividers` | `'none' \| 'columns' \| 'all' \| 'framed'` | `'none'` | Lines between cells instead of a gap. `columns`: between side-by-side cells, turning horizontal once the grid stacks. `all`: every row and column, plus a bottom rule. `framed`: every row and column inside a frame, like a table |
| `dividerColor` | `'stone' \| 'sage' \| 'crimson' \| 'forest'` | — | Draws the lines (and the bottom rule or frame) in that surface's paired border: `stone-200`, `sage-200`, `crimson-700`, `forest-800`. Unset, they follow the section's `border` role |
| `cellPadding` | `boolean` | `true` | Pads each divided cell (`spacing-large` / `spacing-medium`) so content clears the lines. Turn it off to sit a Card flush against them, with the Card's own padding insetting its content |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-layout wpc-grid-group` | Always |
| `wpc-grid-group--columns-{n}` | Always |
| `wpc-grid-group--gap-{step}` | Always |
| `wpc-grid-group--row-gap-{step}` | `rowGap` is set |
| `wpc-grid-group--align-{value}` | `align` is set |
| `wpc-grid-group--dividers`, `wpc-grid-group--dividers-{columns,all,framed}` | `dividers` isn't `none` |
| `wpc-grid-group--divider-{surface}` | `dividers` isn't `none` and `dividerColor` is set |
| `wpc-grid-group--cell-padding` | `dividers` isn't `none` and `cellPadding` is on |

Gap classes are generated from the `$wpc-spacing` map.

### How dividers are drawn

A divided grid has no gap. As in parlour-ui, each line is drawn inside a cell's start edge: a cell that isn't first in its row rules its inline-start side, and a cell past the first row rules its top. So lines only ever fall between cells, and an incomplete last row leaves its empty slots unruled.

Each cell draws its lines with a transparent `::after` overlay. Its inline-start and block-start borders are switched on per breakpoint through `--wpc-grid-line-start` and `--wpc-grid-line-top`. The overlay sits above the cell's background, so cells can have one (a forest Card on a forest section). It takes no space, so turning dividers on never shifts the layout.

`::before` stays free for the cell (FeatureItem draws its short rule with it), but a divided grid's direct children shouldn't use `::after`.

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--spacing-*` | Gap and row gap modifiers |
| `--wpc--color-border` (role) | Default line colour, through `--wpc-grid-group-divider` |
| `--wpc--color-stone-200`, `--wpc--color-sage-200`, `--wpc--color-crimson-700`, `--wpc--color-forest-800` | `dividerColor` lines, the surfaces' paired borders |
| `--wpc--spacing-large`, `--wpc--spacing-medium` | Cell padding |

## Responsive behaviour

| `columns` | Below 600px | 600–960px | Above 960px |
|---|---|---|---|
| `2` | 1 | 2 | 2 |
| `3` | 1 | 1 | 3 |
| `4` | 1 | 2 | 4 |

## Accessibility

- Adds no semantics of its own; the default `<div>` isn't announced.
- The grid never reorders items, so reading order matches the screen.
- For a collection, render `as="ul"` with `Card as="li"` children so screen readers announce a list and its length. Lists get `role="list"` because `list-style: none` otherwise makes Safari drop the list semantics.
