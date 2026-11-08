# Card

A surface for grouping related content: a background, an optional border and shadow, a corner radius and padding. Renders a `<div>` by default, or the element set by `as`. With `href`, the whole card becomes a link.

**Status:** complete

## When to use

- Present one item of a collection (a group, a resource, a person), usually inside a [`GridGroup`](./grid-group.md).
- Render it `as="article"` for content that stands on its own, or `as="li"` inside a `GridGroup` rendered `as="ul"`.
- Content-specific cards planned in the inventory (GroupCard, ResourceCard, PersonCard) build on `Card`.
- Don't use it for full-width page bands; that's [`Container`](./container.md).

## Used in

Group header card and stats panel, primary contact card, organizing team panel, resource cards, Slack chat preview.

## Import

```tsx
import { Card } from '@/components/Card';
```

## Basic usage

```tsx
// Default: white, bordered, small radius, large padding
<Card>
  <h3>Meetup.com Page</h3>
  <p>Official RSVP portal and event dates.</p>
</Card>

// Stats panel
<Card backgroundColor="sage" border={false} borderRadius="md">...</Card>

// Whole card as a link
<Card href="/groups/ottawa" shadow linkProps={{ 'aria-labelledby': 'ottawa-title' }}>
  <h3 id="ottawa-title">WordPress Ottawa</h3>
</Card>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Card content |
| `as` | `'div' \| 'article' \| 'li' \| 'header' \| 'section'` | `'div'` | Root element |
| `backgroundColor` | `'white' \| 'stone' \| 'sage' \| 'blush' \| 'crimson' \| 'forest'` | `'white'` | A surface from the shared set (the names `Container` and `Button` use); sets the role colours for its content |
| `border` | `boolean` | `true` | 1px border in the surface's border colour |
| `shadow` | `boolean` | `false` | Subtle shadow |
| `borderRadius` | `'none' \| 'sm' \| 'md' \| 'lg' \| 'full'` | `'sm'` | Corner radius |
| `paddingInline` | spacing key or `'none'` | `'large'` | Inline padding |
| `paddingBlock` | spacing key or `'none'` | `'large'` | Block padding |
| `href` | `string` | — | Makes the whole card a `Link` |
| `linkProps` | `Link` props | — | Extra props for the link, e.g. `aria-labelledby` |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-card` | Always |
| `wpc-card--bg-{surface}` | The active `backgroundColor` |
| `wpc-card--border` | `border` |
| `wpc-card--shadow` | `shadow` |
| `wpc-card--radius-{name}` | The active `borderRadius` |
| `wpc-card--padding-inline-{step}`, `wpc-card--padding-block-{step}` | The active padding values |
| `wpc-card--linked` | `href` is set |
| `wpc-card__link` | The full-card link element |

The radius and padding modifiers are generated from the `$wpc-radius` and `$wpc-spacing` maps, so new token steps get a class with no edit here.

## Design tokens

| Token | Used for |
|---|---|
| `--wpc-surface-fill` | Background, from the surface (`src/styles/mixins/_surfaces.scss`) |
| `--wpc-surface-border` | Border: `stone-200` on white, stone and blush, `sage-200` on sage, `crimson-700` on crimson, `forest-800` on forest |
| `--wpc-surface-hover-border` | Linked-card hover border: `sage-600` on light surfaces, `crimson-300` on crimson, `forest-400` on forest |
| `--wpc--color-accent` (role) | Focus ring of a linked card, which keeps 3:1 on every surface |
| `--wpc--shadow-subtle` | Shadow |
| `--wpc--radius-*`, `--wpc--spacing-*` | Generated radius and padding modifiers |
| `--wpc--color-primary`, `--wpc--color-accent-inverse` | Link focus outline (light, inverse) |
| `--wpc--transition-fast` | Hover transition |

Each surface also re-declares the role colours through the `tones` mixin (`src/styles/mixins/_tones.scss`).

## Accessibility

- The default `<div>` adds no semantics. Use `as="article"` for a self-contained item and `as="li"` inside a list.
- Each surface re-declares the role colours, so text stays readable in any section: a white card inside an inverse Container keeps dark text.
- A full-card link is announced with all its text unless named. Pass `linkProps={{ 'aria-labelledby': … }}` pointing at the card's heading, and keep other links and buttons out of a linked card.
- The focus outline is drawn around the whole card, in crimson on light surfaces and the light accent on inverse.
- The border is decorative and isn't held to a contrast ratio.
