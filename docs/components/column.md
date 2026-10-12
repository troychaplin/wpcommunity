# Column

A responsive grid for fixed content splits: halves, thirds, quarters, or a one-third / two-thirds pair. `Column.Content` wraps each column and can reorder one visually without changing the DOM order.

**Status:** complete

## When to use

- Split a section into fixed columns: the group page's primary contact (one third) beside the organizing team (two thirds), or text beside a form.
- For collections of equal items that should reflow, use [`GridGroup`](./grid-group.md).
- For a single full-width column, place content directly in the [`Container`](./container.md).

## Used in

Group page contact + team, Slack section (text + chat preview), "Start a group" (text + form).

## Import

```tsx
import { Column } from '@/components/Column';
```

## Basic usage

```tsx
<Column cols="1/3" maxWidth="alignwide">
  <Column.Content>{/* primary contact */}</Column.Content>
  <Column.Content>{/* organizing team */}</Column.Content>
</Column>

// Sidebar shown first once the columns sit side by side, but after the content when stacked
<Column cols="2/3">
  <Column.Content>{/* main content */}</Column.Content>
  <Column.Content isFirst>{/* sidebar */}</Column.Content>
</Column>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | `Column.Content` elements |
| `cols` | `'1' \| '2' \| '3' \| '4' \| '1/3' \| '2/3'` | `'2'` | Column split |
| `maxWidth` | `'aligncontent' \| 'alignwide' \| 'alignfull'` | `'aligncontent'` | Width class |

`Column.Content` takes `children` and `isFirst?: boolean`.

## CSS classes

| Class | When applied |
|---|---|
| `wpc-layout wpc-column` | Always |
| `wpc-column--{one,two,three,four,one-third,two-thirds}` | The active `cols` value |
| `wpc-column__content` | Each `Column.Content` |
| `is-first` | `Column.Content isFirst` |

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--spacing-large` | Gap between columns |

## Responsive behaviour

| `cols` | Below 600px | 600–960px | Above 960px |
|---|---|---|---|
| `2` | 1 | 2 | 2 |
| `3` | 1 | 1 | 3 |
| `4` | 1 | 2 | 4 |
| `1/3`, `2/3` | 1 | 1 | 33% + rest, 66% + rest |

`isFirst` only applies once the columns sit side by side, so stacked columns keep DOM order.

## Accessibility

- Renders a plain `<div>` with no landmark role; semantics belong to the content inside.
- `isFirst` reorders visually only. Keyboard and screen reader order follow the DOM, so keep the DOM in reading order and avoid reordering interactive content far from its visual position.
