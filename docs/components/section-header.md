# SectionHeader

The heading block for a section of a page: an optional [`Eyebrow`](./eyebrow.md), a serif title, optional mono meta text beside it, an optional description below and an optional divider rule. Renders a `<header>` with an `<h2>`, or the level set by `level`.

**Status:** complete

## When to use

- Open a section at the top of a [`Container`](./container.md).
- Use `meta` for a short count or label beside the title ("23 active groups across Canada", "04 Essential Touchpoints").
- Use `align="center"` for centred sections such as Community updates and Common questions.
- Not for the hero's main heading, which renders the page `<h1>` (planned Hero component).

## Used in

Local Meetup Groups, New here?, Community updates, Common questions, Slack section ("Community channel" eyebrow), Organizing Team, Local Resources, Upcoming Gathering.

## Import

```tsx
import { SectionHeader } from '@/components/SectionHeader';
```

## Basic usage

```tsx
<SectionHeader title="Local Meetup Groups" meta="23 active groups across Canada" />

<SectionHeader title="Local Resources & Chapter Links" meta="04 Essential Touchpoints" hasDivider />

<SectionHeader
  title="Common questions"
  description="Everything you need to know about joining the Canadian WordPress community."
  align="center"
/>

<SectionHeader prefix="Community channel" title="Join the WP Canada Slack" />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | `string` | — | Heading text |
| `prefix` | `string` | — | Eyebrow above the title |
| `level` | `2 \| 3 \| 4` | `2` | Heading level |
| `meta` | `ReactNode` | — | Mono text beside the title (below it when centred or on small screens) |
| `description` | `ReactNode` | — | Paragraph below the title row |
| `align` | `'start' \| 'center'` | `'start'` | Alignment |
| `hasDivider` | `boolean` | `false` | Border rule under the header |

## CSS classes

| Class | When applied |
|---|---|
| `wpc-section-header`, `wpc-section-header--{align}` | Always |
| `wpc-section-header--divider` | `hasDivider` |
| `wpc-section-header__main` | Wrapper for eyebrow and title |
| `wpc-section-header__prefix` | `prefix` is set; an accent `Eyebrow` |
| `wpc-section-header__title` | `title` is set |
| `wpc-section-header__meta` | `meta` is set; a muted `Eyebrow` |
| `wpc-section-header__description` | `description` is set |

## Design tokens

| Token | Used for |
|---|---|
| `--wpc--font-size-heading-medium`, `--wpc--line-height-tight` | Title size (family, weight and colour come from the base heading styles) |
| `--wpc--color-text-muted` (role) | Description |
| `--wpc--color-border` (role) | Divider |
| `--wpc--layout-small-size` | Description max width |
| `--wpc--spacing-x-small`, `--wpc--spacing-small`, `--wpc--spacing-medium`, `--wpc--spacing-large` | Gaps, divider padding and bottom margin |

## Responsive behaviour

On small screens everything stacks. Above the mobile breakpoint the meta moves beside the title, aligned to the bottom; centred headers stay stacked.

## Accessibility

- Renders a `<header>`. Inside `<main>` or a sectioning element it's a plain grouping element; keep it inside `Main` or a `Container` so it doesn't become a second banner landmark.
- Use `level` to keep heading levels in order: `level={3}` for subsections.
- The eyebrow and meta are paragraphs outside the heading, so heading navigation skips them.
- Some screen readers read a `·` separator aloud as "dot".
