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
| `maxWidth` | `'alignsmall' \| 'aligncontent' \| 'alignwide' \| 'alignfull'` | — | Width class |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-layout wpc-grid-group` | Always |
| `wpc-grid-group--columns-{n}` | Always |
| `wpc-grid-group--gap-{step}` | Always |
| `wpc-grid-group--row-gap-{step}` | `rowGap` is set |
| `wpc-grid-group--align-{value}` | `align` is set |

Gap classes are generated from the `$wpc-spacing` map.

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--spacing-*` | Gap and row gap modifiers |

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
