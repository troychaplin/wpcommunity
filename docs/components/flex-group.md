# FlexGroup

A general-purpose flex container that arranges its children in a row or column with a chosen gap and alignment. Renders a `<div>` by default, or any of the sectioning elements the WordPress Group block offers. [`GridGroup`](./grid-group.md) covers the grid half of that block.

**Status:** complete

## When to use

- Lay out content-sized children in a row or stack: a header row, a card footer, a label beside a value.
- Use [`GridGroup`](./grid-group.md) for equal-width columns that reflow, or [`Column`](./column.md) for fixed splits.
- Use it inside a [`Container`](./container.md), not instead of one.
- It's not a styling wrapper: no background, border or typography props.

## Used in

SiteHeader (branding, nav and actions in one row), the "Showing 6 of 23 groups / View all groups" row, card meta rows.

## Import

```tsx
import { FlexGroup } from '@/components/FlexGroup';
```

## Basic usage

```tsx
<FlexGroup justify="space-between" align="center" gap="small">
  <p>Showing 6 of 23 groups</p>
  <TextLink href="/groups">View all groups</TextLink>
</FlexGroup>

<FlexGroup direction="column" gap="x-small">...</FlexGroup>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Flex items |
| `as` | `'div' \| 'section' \| 'header' \| 'main' \| 'footer' \| 'article' \| 'nav' \| 'aside' \| 'ul' \| 'ol'` | `'div'` | Root element |
| `direction` | `'row' \| 'column'` | `'row'` | Main axis |
| `wrap` | `'wrap' \| 'nowrap'` | `'wrap'` | Wrapping |
| `justify` | `'start' \| 'center' \| 'end' \| 'space-between'` | — | `justify-content` |
| `align` | `'start' \| 'center' \| 'end' \| 'stretch'` | — | `align-items` |
| `gap`, `padding`, `margin` | spacing key or `'none'` | — | Gap, padding and block margin |
| `maxWidth` | `'alignsmall' \| 'aligncontent' \| 'alignwide' \| 'alignfull'` | — | Width class; the group fills its parent up to that width and centres only when one is set |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-layout wpc-flex-group` | Always |
| `wpc-flex-group--{row,column}`, `wpc-flex-group--{wrap,nowrap}` | Always |
| `wpc-flex-group--justify-{value}`, `wpc-flex-group--align-{value}` | `justify` / `align` set |
| `wpc-flex-group--gap-{step}`, `--padding-{step}`, `--margin-{step}` | `gap` / `padding` / `margin` set |

The spacing modifiers are generated from the `$wpc-spacing` map. The margin modifier uses a doubled class so it beats the after-heading spacing rule in `wpc-typography.css`.

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--spacing-*` | Gap, padding and margin modifiers |

## Accessibility

- The default `<div>` adds no semantics, which is right for a layout wrapper.
- `as="section"` is a landmark only with an accessible name; pass `aria-label` or `aria-labelledby` with it.
- `justify`, `align` and `direction` never reorder children. Keep the DOM in reading order.
