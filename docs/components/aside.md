# Aside

A semantic `<aside>` wrapper for supplementary content: sidebars, related links, callouts. Can make its content sticky.

**Status:** complete

## When to use

- Beside the main content in a [`Column`](./column.md) layout: related links on the right, or a sticky table of contents or filters.
- Keep sticky content shorter than the column beside it; it only moves while the aside is taller than its content.

## Used in

Not in the two designs yet; intended for long-form content pages.

## Import

```tsx
import { Aside } from '@/components/Aside';
```

## Basic usage

```tsx
<Column cols="2/3">
  <Column.Content>{/* main content */}</Column.Content>
  <Column.Content>
    <Aside isSticky topSpace={24}>
      <nav aria-label="On this page">…</nav>
    </Aside>
  </Column.Content>
</Column>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Aside content |
| `isSticky` | `boolean` | — | Wraps the content in a sticky container |
| `topSpace` | `number` | `0` | Sticky `top` offset in pixels |
| `className` | `string` | — | Extra classes |

Other HTML attributes, such as `aria-label`, pass through.

## CSS classes

| Class | Element | When applied |
|---|---|---|
| `wpc-aside` | `<aside>` | Always; `position: relative` |
| `sticky` | inner `<div>` | `isSticky`; `position: sticky` |

## Design tokens

None. The sticky `top` offset is a raw pixel value from the `topSpace` prop rather than a spacing token.

## Responsive behaviour

When the columns stack on small screens, the aside is only as tall as its content, so sticky content scrolls with the page.

## Accessibility

- `<aside>` is a complementary landmark. When a page has more than one, give each an `aria-label`.
