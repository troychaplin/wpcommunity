# ButtonGroup

A flex container that lays out two or more [`Button`](./button.md) components in a wrapping row with consistent spacing.

**Status:** complete

## When to use

- Any time two or more buttons sit side by side: a primary and secondary pair, or a form's action row.
- For a single button, `ButtonGroup` is unnecessary.

## Used in

Homepage hero, group page contact card, Upcoming Gathering band.

## Import

```tsx
import { ButtonGroup } from '@/components/ButtonGroup';
```

## Basic usage

```tsx
<ButtonGroup>
  <Button text="RSVP on Meetup.com" href="/rsvp" />
  <Button text="Propose a Talk" color="inverse" href="/talks" />
</ButtonGroup>

// Right-aligned form actions
<ButtonGroup align="end">
  <Button text="Submit my group" type="submit" />
</ButtonGroup>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | The buttons |
| `align` | `'start' \| 'center' \| 'end'` | `'start'` | Horizontal alignment |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-buttongroup` | Always |
| `wpc-buttongroup--justify-{align}` | The active `align` value |

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--spacing-x-small` | Gap between buttons |

## Responsive behaviour

Above the tablet breakpoint the group takes `flex: 1 1 0%`, so it fills the remaining space when it sits in a flex row beside other content.

## Accessibility

- Renders a plain `<div>` with no role; each button keeps its own name and role.
- For a toolbar of related actions, add `role="group"` and an `aria-label` at the call site.
