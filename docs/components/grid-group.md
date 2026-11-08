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
| `dividers` | `'none' \| 'columns' \| 'all'` | `'none'` | Lines between cells instead of gaps: `columns` draws vertical lines, `all` adds lines between rows and a bottom rule |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-layout wpc-grid-group` | Always |
| `wpc-grid-group--columns-{n}` | Always |
| `wpc-grid-group--gap-{step}` | Always |
| `wpc-grid-group--row-gap-{step}` | `rowGap` is set |
| `wpc-grid-group--align-{value}` | `align` is set |
| `wpc-grid-group--dividers`, `wpc-grid-group--dividers-{columns,all}` | `dividers` isn't `none` |

Gap classes are generated from the `$wpc-spacing` map.

With dividers, the gap is replaced by cell padding (`spacing-large` / `spacing-medium`). Each cell draws its own right and bottom lines as box shadows in the `border` role, and the grid clips the ones that fall past its edges, so lines only ever appear between cells at every column count. Cells should have no background, which would paint over the neighbouring lines.

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--spacing-*` | Gap and row gap modifiers |
| `--wpc--color-border` (role), `--wpc--spacing-large`, `--wpc--spacing-medium` | Divider lines and cell padding |

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
