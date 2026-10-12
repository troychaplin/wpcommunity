# ComponentName

One sentence: what the component is and what it renders. Name the element it produces and any conditional swap.

**Status:** planned | specced | complete

## When to use

2–4 bullets on appropriate uses, including at least one boundary: what this component is _not_ for.

## Used in

Every place it appears in the designs.

![ComponentName in the homepage design](./images/component-name.png)

## Import

```tsx
import { ComponentName } from '@/components/ComponentName';
```

## Basic usage

```tsx
// Common shape
<ComponentName />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|

## CSS classes

| Class | When applied |
|---|---|
| `wpc-component-name` | Always |

## Design tokens

| Token | Used for |
|---|---|

List every `--wpc--*` token the component's `styles.scss` uses. If it uses a raw value anywhere, say so below the table.

## Responsive behaviour

What changes at the `below-mobile`, `only-tablet` and `above-tablet` breakpoints (600px and 960px).

## Accessibility

- The semantic element and why
- Keyboard and screen reader behaviour
- Colour-only meaning and any contrast the system can't guarantee

## Open questions
