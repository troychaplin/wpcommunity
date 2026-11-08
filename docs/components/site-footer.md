# SiteFooter

The page footer on the forest background: the site name and a short description, a column of navigation links, an extra slot for the language switcher, and a bottom bar with legal and meta lines. Renders a `<footer>` landmark.

**Status:** complete

## When to use

- Once per page, after [`Main`](./main.md), as the counterpart to [`SiteHeader`](./site-header.md).
- Put the [`LanguageToggle`](./language-toggle.md) (`variant="list"`) in `children`, with a `navLabel` that differs from the header toggle's.

## Used in

Both pages: "WP Canada" brand and description, Meetup Groups / Join Slack / Submit a Group / Getting Started / FAQ, English / Français, "WP Canada Community…" and "Part of the global WordPress ecosystem."

## Import

```tsx
import { SiteFooter } from '@/components/SiteFooter';
```

## Basic usage

```tsx
<SiteFooter
  name="WP Canada"
  nameHref="/"
  description="A bilingual community for Canada's WordPress people."
  navItems={[{ href: '/groups', label: 'Meetup Groups' }]}
  legal="WP Canada Community. Built with WordPress and community care."
  meta={<>Part of the global <a href="https://wordpress.org">WordPress</a> ecosystem.</>}
>
  <LanguageToggle languages={languages} variant="list" navLabel="Footer language" />
</SiteFooter>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `name` | `string` | — | Site name (required) |
| `nameHref` | `string` | — | Makes the name a link |
| `description` | `ReactNode` | — | Line under the name |
| `navItems` | `{ href: string; label: string }[]` | — | Footer navigation links |
| `navLabel` | `string` | `'Footer'` | Accessible name of the nav |
| `children` | `ReactNode` | — | Extra slot at the end of the row (language) |
| `legal` | `ReactNode` | — | Bottom bar, start |
| `meta` | `ReactNode` | — | Bottom bar, end; links in it are highlighted |
| `className` | `string` | — | Extra classes |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-site-footer` | Always |
| `wpc-site-footer__inner`, `__brand`, `__name` | Always |
| `wpc-site-footer__description` | `description` is set |
| `wpc-site-footer__nav` | `navItems` is non-empty |
| `wpc-site-footer__extra` | `children` is set |
| `wpc-site-footer__bottom`, `__legal`, `__meta` | `legal` or `meta` is set |

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--color-forest-950` | Background |
| `--wpc--color-text`, `--wpc--color-text-muted`, `--wpc--color-border` (roles, inverse values) | Name and highlighted links, links and secondary text, bottom rule |
| `--wpc--font-family-serif`, `--wpc--font-size-x-large`, `--wpc--font-weight-semibold`, `--wpc--line-height-tight` | Site name |
| `--wpc--font-size-small`, `--wpc--font-size-x-small` | Body and bottom bar text |
| `--wpc--layout-wide-size` | Content width |
| `--wpc--spacing-small` … `--wpc--spacing-x-large`, `--wpc--root-padding-x` | Gaps and padding |
| `--wpc--transition-fast` | Link hover |

The footer applies the inverse role colours through the `tones` mixin.

## Responsive behaviour

Stacked on small screens. Above the tablet breakpoint: brand (2fr), nav (1fr), then the extra slot pushed to the end.

## Accessibility

- A top-level `<footer>` is the `contentinfo` landmark; keep it outside `Main`.
- The nav is labelled by `navLabel` ("Footer") so it's distinct from the header's "Primary" nav.
- Links use the inverse muted role, `forest-400` (#8fa79a), about 6:1 on forest. The design's lichen (`forest-600`, #5a7165) is about 3:1, below the 4.5:1 AA needs for small text, so the role was lightened.
