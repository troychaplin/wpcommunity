# Components

The component plan for wpcommunity.ca: every component needed to build the [homepage](../design/homepage.png) and [group detail page](../design/group-page.png) designs, the conventions they follow, the order to build them in, and the questions still open.

The first set of components came from [Parlour UI](https://github.com/troychaplin/parlour-ui) (v0.3.0), which also uses c2b, and has been aligned to this project's tokens and designs.

## How to use these docs

- **One doc per component.** Each component has its own file in this folder (e.g. [`button.md`](./button.md)), following [`_template.md`](./_template.md). The inventory links to each doc.
- **Status** moves through `planned` → `specced` → `complete`.
- **Designs** live in [`docs/design/`](../design/) as the original 2× exports. **Crops** for individual docs are cut from those and saved in `docs/components/images/`.
- **Review** components on the [`/kitchen-sink`](../../src/app/kitchen-sink/page.tsx) route (`pnpm dev`, then open `/kitchen-sink`).
- **Tokens** come from [`c2b.config.json`](../../c2b.config.json) (prefix `wpc`). Docs refer to tokens by role (`--wpc--color-text`, `--wpc--spacing-medium`) rather than raw values.

## Conventions

Adapted from Parlour's `build-component` skill.

### Files

```
src/components/ComponentName/
├── ComponentName.tsx   # implementation
├── index.ts            # barrel: export { ComponentName } and type { ComponentNameProps }
└── styles.scss         # component styles (omit if none)
docs/components/component-name.md
```

- Named exports only: the component and its `ComponentNameProps` interface. No default exports.
- Subcomponents attach with `Object.assign` and set an explicit `displayName` (see `Column.Content`).

### Styling

- Global SCSS imported in the TSX (`import './styles.scss'`), with BEM classes prefixed `wpc-`: `wpc-block`, `wpc-block--modifier`, `wpc-block__element`.
- Every visual value comes from a `--wpc--*` token. If a value has no token, add it to `c2b.config.json` and run `pnpm tokens`. Never edit the generated `src/styles/wpc-*` files.
- Breakpoints use the generated mixins, mobile-first: `@use '../../styles/wpc-variables' as *;` then `@include above-mobile { … }` / `above-tablet` (600px / 960px).
- Modifier classes for a token scale are generated from the `$wpc-spacing` and `$wpc-radius` maps, so new token steps get classes with no component edit.
- Global styles live in `src/styles/main.scss`, imported once by the root layout: modern-normalize, the generated tokens, `base/*` (focus, selection, alignment widths, `.sr-only`) and the generated base, layout and typography CSS.

### Tones

- Surfaces set a tone, and the tone re-declares the role tokens (`--wpc--color-text`, `-heading`, `-text-muted`, `-border`, `-accent`) through the mixins in `src/styles/mixins/_tones.scss`.
- Components read roles, not palette colours, for anything that should adapt to light or dark sections. Buttons are the exception: they read palette tokens so they look the same everywhere.
- `Container` and `Card` take the same `backgroundColor` / `color` values: `white`, `canvas`, `tint`, `inverse`, `blush`.

### Props

- Shared option sets live in `src/utils/propClasses.tsx`. Derive prop types from them with `keyof typeof` so the two can't drift.
- Use a discriminated union for polymorphic shapes (Button: `href` → link, otherwise `<button>`).
- Spread `...rest` onto the root element so consumers can pass ARIA and HTML attributes. Interactive components extend the underlying element's props.

### Links and client code

- Links use `next/link` directly. Components are Server Components by default; add `'use client'` only for state, effects or context.

### Code style

- `undefined`, not `''`, for a conditional `className`.
- Early returns over ternaries for branching render logic.
- No commented-out code and no `TODO` stubs.

## Inventory

### Foundations

| Component | Used in | Variants / notes | Depends on | Status |
|---|---|---|---|---|
| [Button](./button.md) | Hero, Slack section, contact card, CTA band, group form | primary (crimson), secondary (white + border), inverse (outline on forest); `href` renders a link | — | complete |
| [ButtonGroup](./button-group.md) | Hero, contact card, CTA band | wrapping row of buttons; align start / center / end | Button | complete |
| [SkipLink](./skip-link.md) | Every page (root layout) | off-screen until focused; targets `#main` | Main | complete |
| TextLink | Group cards, resources, updates, "View all groups" | crimson, small, semibold; optional trailing arrow | Icon | planned |
| Eyebrow | Card regions, stat / resource / fieldset / FAQ-group labels, update dates | mono label; tones: accent, muted, inverse | — | planned |
| Pill | Group header, update tags | region (sage + dot), status (outline), tag (Event / Announcement / Resource / Community) | — | planned |
| FilterPill | Meetup filter bar | toggle (`aria-pressed`): active forest fill / inactive outline | — | planned |
| Avatar | Contact, volunteers, Slack mock | image (sizes lg / md) or initials fallback | — | planned |
| Icon | Feature list, Slack button, FAQ `+`, arrows, search | wrapper around the chosen icon set | — | planned |
| Heading | Everywhere | separates the HTML level (`as`) from the visual size (display / large / medium / small / card); optional accent word (the "canopy" span) | — | planned |

### Page structure

| Component | Used in | Variants / notes | Depends on | Status |
|---|---|---|---|---|
| [Body](./body.md) | Root layout | renders `<body>` | — | complete |
| [Main](./main.md) | Every page | `<main id="main">` with the WP layout inner div; optional block padding | — | complete |
| [Article](./article.md) | Content pages | JSX children or an HTML string (`content`) | — | complete |
| [Aside](./aside.md) | Content pages | optional sticky content | — | complete |

### Layout

| Component | Used in | Variants / notes | Depends on | Status |
|---|---|---|---|---|
| [Container](./container.md) | Every page band | tone: canvas / tint / inverse / blush / white (re-declares role tokens); width and content width from the WP alignment classes | — | complete |
| [SectionHeader](./section-header.md) | Meetup groups, resources, updates, FAQ, "New here?", Slack, CTA band | eyebrow, serif title, mono meta, description; align start / center; optional divider | — | complete |
| [GridGroup](./grid-group.md) | Group cards (3), features (4), resources (4), team (3) | 1–4 responsive columns, token gaps | — | complete |
| [Column](./column.md) | Slack section, "Start a group", contact + team | halves, thirds, quarters, one-third / two-thirds; `Column.Content isFirst` reordering | — | complete |
| [FlexGroup](./flex-group.md) | Header row, "Showing 6 of 23" row, card meta rows | direction, wrap, justify, align, token gap / padding / margin | — | complete |

### Content components

| Component | Used in | Variants / notes | Depends on | Status |
|---|---|---|---|---|
| [Card](./card.md) | Group header, contact, team panel, resources, Slack mock | surfaces white / canvas / tint / inverse / blush; border, shadow, radius, padding; full-card link | — | complete |
| [Figure](./figure.md) | Content pages | sizes xs–full, float left / right / center, caption | — | complete |
| GroupCard | Homepage group grid | eyebrow region, serif title, excerpt, rule, meta (members · cadence), link; divider-line grid style | Card, Eyebrow, TextLink | planned |
| FeatureItem | "New here?" | icon, serif title, text, link | Icon, TextLink | planned |
| Stat / StatGroup | Group header, Slack mock | serif value + mono label, with dividers; mono-value variant for the Slack mock | Eyebrow | planned |
| PersonCard | Primary contact, volunteers | featured (label, lg avatar, role, handle, bio, actions) / compact | Avatar, Eyebrow, Button, Card | planned |
| ResourceCard | Local resources | eyebrow, serif title, text, arrow link pinned to the bottom | Card, Eyebrow, TextLink | planned |
| UpdateItem | Community updates | date + tag column, serif title, excerpt, link; rules between items | Eyebrow, Pill, TextLink | planned |
| Accordion | FAQ | AccordionGroup (mono label) + AccordionItem; built on `details` / `summary` | Eyebrow, Icon | planned |
| Form fields | "Start a group" | Fieldset (mono legend), TextField, TextArea, Select (province); inverse tone; form note | Eyebrow | planned |
| SearchField | Meetup Index sidebar | TextField variant with a leading icon | Form fields, Icon | planned |
| FilterBar | Meetup groups | "Region" label + single-select FilterPill group | FilterPill | planned |
| ChatPreview | Slack section | static Slack mock: channel header, messages (initials avatar, name, time, text), stats footer | Card, Avatar, StatGroup | planned |

### Page sections

| Component | Used in | Variants / notes | Depends on | Status |
|---|---|---|---|---|
| [SiteHeader](./site-header.md) | All pages | serif wordmark, primary nav, actions slot (language toggle) | FlexGroup | complete |
| [SiteFooter](./site-footer.md) | All pages | forest; brand + description, nav column, extra slot (language), bottom bar | — | complete |
| LanguageToggle | Header, footer | segmented EN / FR (header) / vertical list (footer) | — | planned |
| MeetupIndex | Home hero | sidebar panel: title + version, search, region rows with counts, status meta | SearchField, Eyebrow | planned |
| Hero | Home | MeetupIndex + display heading with accent word, lead, buttons; blush + image | MeetupIndex, Heading, ButtonGroup, Container | planned |
| GroupHeader | Group page | pills row + channel link, h1, description, stats in a tint card | Pill, Heading, StatGroup, Card | planned |
| CTABand | Group page (upcoming gathering) | inverse + forest-glow; eyebrow, title, meta row, location, buttons | Container, SectionHeader, ButtonGroup | planned |

## Alignment (Parlour → wpc)

The imported components were aligned to this project in one pass.

| Component | Work done | Done |
|---|---|---|
| All | `parlour` → `wpc` prefix; Parlour token names remapped to the wpc config; `LinkProvider` replaced by `next/link` (no more `'use client'`); stories and `Docs.mdx` removed; docs rewritten as markdown | ✅ |
| Global styles | `src/styles/main.scss` + `base/*` ported (modern-normalize, focus, selection, alignment widths, `.sr-only`); `globals.css` removed; config gained `radius` SCSS vars, `layout.fullSize`, `zIndex` and the `accent` role | ✅ |
| Container | tones canvas / tint / inverse / blush / white via the tones mixin; rhythm between child blocks; radius classes from the token map | ✅ |
| Card | surfaces via the tones mixin; border follows the role; `shadow` prop; defaults radius `sm`, padding `large`; `borderColor` prop removed | ✅ |
| Button | variants primary / secondary / inverse; `isOutline` and the Parlour colour set removed | ✅ |
| ButtonGroup | gap `x-small` | ✅ |
| SectionHeader | `meta`, `description`, `align`, `hasDivider`; eyebrow follows the accent role, in sentence case | ✅ |
| GridGroup, Column | 4-column layouts; breakpoints follow the 960px tablet viewport | ✅ |
| FlexGroup | spacing classes generated from `$wpc-spacing` (the old prefix-length slice broke with `wpc-`) | ✅ |
| SiteHeader | canvas header, serif wordmark, ink nav | ✅ |
| SiteFooter | rebuilt to the design (brand, nav, extra slot, bottom bar); socials and `BrandIcon` removed | ✅ |
| SkipLink, Main, Aside, Figure, Body, Article | token remap; Main's link styles scoped to prose links; Aside's undefined utility classes removed; Body in the root layout with SkipLink | ✅ |

## Build order

Each phase only depends on the phases before it.

0. **Align the imported components** ✅
1. **Foundations:** TextLink, Eyebrow, Pill, FilterPill, Avatar, Icon, Heading
2. **Layout:** complete (Container, SectionHeader, GridGroup, Column, FlexGroup)
3. **Content components:** GroupCard, FeatureItem, Stat / StatGroup, PersonCard, ResourceCard, UpdateItem, Accordion, Form fields, SearchField, FilterBar, ChatPreview
4. **Page sections:** LanguageToggle, MeetupIndex, Hero, GroupHeader, CTABand
5. **Pages:** homepage and group detail page, assembled from typed mock data

## Open questions

- **Icons:** which icon library.
- **Bilingual EN / FR:** routing (`/fr`?) and which i18n library.
- **Data source:** static typed mock data first; later WP REST, the Meetup API, or something else.
- **Mobile nav:** the designs don't show one; the header nav currently wraps.
- **Filtering:** whether the region filter and search are client-side.
- **Group form:** where submissions go.
- **Imagery:** the hero canopy image and the avatars.
- **Group page title:** it's smaller than the section titles in the design (about 30px vs 34px); pick a size.
- **Muted text on forest:** the design's muted colour on dark sections (lichen `#5a7165`) is about 3:1 on forest, below the 4.5:1 AA needs for small text. It's used for footer links and inverse descriptions. A lighter value (around `#8fa79a`, about 6:1) would pass.
- **Figure widths:** the size widths are raw values carried over from Parlour; add layout tokens if Figure gets used.
