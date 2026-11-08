# Icon

A line icon from [Lucide](https://lucide.dev), rendered as an inline `<svg>` sized in `em` so it matches the text beside it. Decorative by default.

**Status:** complete

## When to use

- Beside text: in buttons ("Find Local Meetups"), after links (the arrow), in search fields.
- On its own as a feature marker ("New here?" section), with a size from the type scale.
- Don't use it to carry meaning on its own without a `label`.

## Used in

"New here?" features (map-pin, messages-square, circle-plus, star), hero buttons (map-pin, message-circle-more), search field (search), FAQ toggles (plus, minus), resource links (arrow-right).

![Feature icons in the homepage design](./images/icon.png)

## Import

```tsx
import { Icon } from '@/components/Icon';
```

## Basic usage

```tsx
// Inherits the surrounding font size and colour
<Icon name="arrow-right" />

// A standalone feature icon
<Icon name="map-pin" size="heading-small" />

// Meaningful on its own: give it a label
<Icon name="search" label="Search" />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `IconName` | — | Icon from the registry (required) |
| `size` | `'inherit' \| 'small' \| 'medium' \| 'large' \| 'x-large' \| '2x-large' \| 'heading-small'` | `'inherit'` | `inherit` is `1em`; the others set the font size from the type scale |
| `strokeWidth` | `number` | `1.75` | Line weight |
| `label` | `string` | — | Accessible name; makes the icon `role="img"` |

Other SVG props pass through.

## The registry

`src/components/Icon/icons.ts` maps names to Lucide components and holds only the icons the designs use: `arrow-right`, `circle-plus`, `map-pin`, `message-circle-more`, `messages-square`, `minus`, `plus`, `search`, `star`. Add an icon there to use it. Swapping icon libraries later means changing that file alone.

## CSS classes

| Class | When applied |
|---|---|
| `wpc-icon` | Always (alongside Lucide's own `lucide` classes) |
| `wpc-icon--{size}` | `size` isn't `inherit` |

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--font-size-small` … `--wpc--font-size-heading-small` | Size modifiers |

The icon is `1em` square and strokes in `currentColor`; neither is a design value.

## Accessibility

- Without `label`, the icon gets `aria-hidden="true"` and `focusable="false"`, because the text beside it carries the meaning.
- With `label`, it's announced as an image with that name. Use this only when the icon stands alone, such as an icon-only button (where the label usually belongs on the button instead).
