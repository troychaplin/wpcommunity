# Body

A thin wrapper that renders the `<body>` element.

**Status:** complete

## When to use

- In the root layout, where the full document is composed as components. It's already used in `src/app/layout.tsx`, with the [`SkipLink`](./skip-link.md) as its first child.

## Used in

The root layout.

## Import

```tsx
import { Body } from '@/components/Body';
```

## Basic usage

```tsx
<html lang="en">
  <Body>
    <SkipLink />
    {children}
  </Body>
</html>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Page content |
| `className` | `string` | — | Classes on `<body>` |

## CSS classes

None of its own; `className` passes through. Body typography and background come from the c2b base styles (`body` rule in `wpc-base-styles.css`).

## Design tokens

None.

## Accessibility

- `<body>` is the document root, not a landmark.
