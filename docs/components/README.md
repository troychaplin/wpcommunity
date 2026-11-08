# Components

The component plan for wpcommunity.ca: every component needed to build the [homepage](../design/homepage.png) and [group detail page](../design/group-page.png) designs, the conventions they follow, the order to build them in, and the questions still open.

The first set of components came from [Parlour UI](https://github.com/troychaplin/parlour-ui) (v0.3.0), which also uses c2b, and has been aligned to this project's tokens and designs.

## How to use these docs

- **One doc per component.** Each component has its own file in this folder (e.g. [`button.md`](./button.md)), following [`_template.md`](./_template.md). The inventory links to each doc.
- **Status** moves through `planned` → `specced` → `complete`.
- **Designs** live in [`docs/design/`](../design/) as the original 2× exports. **Crops** for individual docs are cut from those and saved in `docs/components/images/`.
- **Review** components in Storybook: `pnpm storybook` locally, or the deployed copy on GitHub Pages. Each component has a `ComponentName.stories.tsx` beside it; shared sample content is in [`src/stories/fixtures.ts`](../../src/stories/fixtures.ts).
- **Tokens** come from [`c2b.config.json`](../../c2b.config.json) (prefix `wpc`). Docs refer to tokens by role (`--wpc--color-text`, `--wpc--spacing-medium`) rather than raw values.
- **Design scale:** the exports are 2×. The homepage is 1277 CSS px wide and the group page 1371, so halve pixel measurements taken from them.

## Conventions

Adapted from Parlour's `build-component` skill.

### Files

```
src/components/ComponentName/
├── ComponentName.tsx   # implementation
├── index.ts            # barrel: export { ComponentName } and type { ComponentNameProps }
├── ComponentName.stories.tsx  # Storybook stories, titled by inventory group
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
- Global styles live in `src/styles/main.scss`, imported once by the root route (`src/app/root.tsx`): modern-normalize, the generated tokens, `base/*` (focus, selection, alignment widths, `.sr-only`) and the generated base, layout and typography CSS.

### Tones

- Surfaces set a tone, and the tone re-declares the role tokens (`--wpc--color-text`, `-heading`, `-text-muted`, `-border`, `-accent`) through the mixins in `src/styles/mixins/_tones.scss`.
- Components read roles, not palette colours, for anything that should adapt to light or dark sections. Buttons are the exception: they read palette tokens so they look the same everywhere.
- `Container` and `Card` take the same `backgroundColor` / `color` values: `white`, `canvas`, `tint`, `inverse`, `blush`.

### Forms

- Form controls are wrapped by their `<label>`, which associates the two without ids. `hideLabel` keeps the label for screen readers.
- TextField, TextArea and Select take an `error` message: it renders under the control in the accent role, sets `aria-invalid` and is linked with `aria-describedby`.
- Controls share the `control` mixin in `src/styles/mixins/_field.scss` and read the `field` and `field-border` roles, which the tone mixins re-declare (white / stone or sage-dark on light, forest-light / pine on inverse). Placeholders use `text-muted`.

### Props

- Shared option sets live in `src/utils/propClasses.tsx`. Derive prop types from them with `keyof typeof` so the two can't drift.
- Use a discriminated union for polymorphic shapes (Button: `href` → link, otherwise `<button>`).
- Spread `...rest` onto the root element so consumers can pass ARIA and HTML attributes. Interactive components extend the underlying element's props.

### Icons

- Icons come from `lucide-react`, through the registry in `src/components/Icon/icons.ts`. Add an icon there before using it; components take an `IconName`, never a Lucide import.

### Links and client code

- Components never import a router. Links render `Link` from [`src/components/LinkProvider`](../../src/components/LinkProvider/), a plain `<a>` by default; the app hands it React Router's `Link` through `LinkProvider` in `src/app/root.tsx`. That keeps components working in Storybook and c2b. `'use client'` marks components with state, effects or context, for any Server Components consumer.
- Interactive components are controlled (`value` + `onChange`) and hold no state. A small client wrapper owns the state, as in the FilterBar story (`src/components/FilterBar/FilterBar.stories.tsx`).
- App-level client code that wires components to data lives in `src/features/`, not in `src/components/` (see [Pages](#pages)).
- Components take their user-facing strings as props with English defaults, so the pages can pass translations.

### Layout

- GridGroup, FlexGroup and Column centre themselves only when a width class (`maxWidth`) caps them. Auto margins stop a grid or flex item from stretching, so an uncapped group fills its parent instead.

### Code style

- `undefined`, not `''`, for a conditional `className`.
- Early returns over ternaries for branching render logic.
- No commented-out code and no `TODO` stubs.

## Inventory

### Foundations

| Component | Used in | Variants / notes | Depends on | Status |
|---|---|---|---|---|
| [Button](./button.md) | Hero, Slack section, contact card, CTA band, group form | primary (crimson), secondary (white + border), inverse (outline on forest); leading icon; small / large; `href` renders a link | Icon | complete |
| [ButtonGroup](./button-group.md) | Hero, contact card, CTA band | wrapping row of buttons; align start / center / end | Button | complete |
| [SkipLink](./skip-link.md) | Every page (root layout) | off-screen until focused; targets `#main` | Main | complete |
| [Icon](./icon.md) | Feature list, hero buttons, FAQ `+`, arrows, search | Lucide icons behind a registry of the ones the designs use; `em`-sized, decorative unless labelled | — | complete |
| [Heading](./heading.md) | Hero, page and card titles, stat values | HTML level (`as`) separate from visual size (display … large); `accent` word (the "canopy" span) | — | complete |
| [Eyebrow](./eyebrow.md) | Card regions, section eyebrows, stat / resource / fieldset / FAQ-group labels, dates | mono label; tones muted / accent (both follow the section tone) | — | complete |
| [TextLink](./text-link.md) | Group cards, resources, updates, "View all groups", channel links | crimson semibold; optional trailing arrow; mono variant | Icon | complete |
| [Pill](./pill.md) | Group header, update tags | tag (crimson tint), region (sage + dot), status (bordered) | — | complete |
| [FilterPill](./filter-pill.md) | Meetup filter bar | stateless toggle (`aria-pressed`): forest-light fill when pressed | — | complete |
| [Avatar](./avatar.md) | Contact, volunteers, Slack mock | photo (ringed circle) or initials; small / medium / large; circle / square | — | complete |

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
| [SectionHeader](./section-header.md) | Meetup groups, resources, updates, FAQ, "New here?", Slack, CTA band | eyebrow, serif title, mono meta, description; align start / center; optional divider | Eyebrow | complete |
| [GridGroup](./grid-group.md) | Group cards (3), features (4), resources (4), team (3), form rows (2) | 1–4 responsive columns, token gaps; `dividers` (columns / all) draws lines between cells | — | complete |
| [Column](./column.md) | Slack section, "Start a group", contact + team | halves, thirds, quarters, one-third / two-thirds; `Column.Content isFirst` reordering | — | complete |
| [FlexGroup](./flex-group.md) | Header row, "Showing 6 of 23" row, card meta rows | direction, wrap, justify, align, token gap / padding / margin | — | complete |

### Content components

| Component | Used in | Variants / notes | Depends on | Status |
|---|---|---|---|---|
| [Card](./card.md) | Group header, contact, team panel, resources, Slack mock | surfaces white / canvas / tint / inverse / blush; border, shadow, radius, padding; full-card link | — | complete |
| [Figure](./figure.md) | Content pages | sizes xs–full, float left / right / center, caption | — | complete |
| [GroupCard](./group-card.md) | Homepage group grid | unboxed; region eyebrow, title, description, meta (members · cadence), link | Eyebrow, Heading, TextLink | complete |
| [FeatureItem](./feature-item.md) | "New here?" | short rule, icon, title, text, link pinned to the bottom | Icon, Heading, TextLink | complete |
| [StatGroup](./stat-group.md) | Group header, Slack mock | `<dl>` with `StatGroup.Item`; serif (with dividers) / mono | — | complete |
| [PersonCard](./person-card.md) | Primary contact, volunteers | featured (label, lg avatar, role, handle, bio, actions) / compact | Avatar, Card, Eyebrow, Heading | complete |
| [ResourceCard](./resource-card.md) | Local resources | eyebrow, title, text, arrow link pinned to the bottom | Card, Eyebrow, Heading, TextLink | complete |
| [UpdateList](./update-list.md) | Community updates | `UpdateList.Item`: date + tag column (subgrid-aligned), title, excerpt, link | Eyebrow, Pill, Heading, TextLink | complete |
| [Accordion](./accordion.md) | FAQ | label + `Accordion.Item` on native `details` / `summary`; plus / minus icons | Eyebrow, Icon | complete |
| [Fieldset](./fieldset.md) | "Start a group" form | mono legend over a rule | — | complete |
| [TextField](./text-field.md) | "Start a group" form | wrapping label; optional leading icon; field roles for light / inverse | Icon | complete |
| [TextArea](./text-area.md) | "Start a group" form | wrapping label; vertical resize | — | complete |
| [Select](./select.md) | "Start a group" form (province) | native select with a chevron icon | Icon | complete |
| [SearchField](./search-field.md) | Meetup Index sidebar | TextField preset: search icon, hidden label, taller | TextField | complete |
| [FilterBar](./filter-bar.md) | Meetup groups | controlled client component; label + FilterPill group | Eyebrow, FilterPill | complete |
| [ChatPreview](./chat-preview.md) | Slack section | figure: channel header, initials-avatar messages, mono stats footer | Card, Avatar, Eyebrow, StatGroup | complete |

### Page sections

| Component | Used in | Variants / notes | Depends on | Status |
|---|---|---|---|---|
| [SiteHeader](./site-header.md) | All pages | serif wordmark; muted nav beside the actions slot (language toggle); Menu button and panel below tablet | FlexGroup, Icon | complete |
| [SiteFooter](./site-footer.md) | All pages | forest; brand + description, nav column, extra slot (language), bottom bar | — | complete |
| [LanguageToggle](./language-toggle.md) | Header, footer | segmented En / Fr pill / labelled list; takes hrefs, `lang` + `aria-current` | — | complete |
| [MeetupIndex](./meetup-index.md) | Home hero | title + version, search slot, region rows with dotted leaders and counts, meta facts | Eyebrow | complete |
| [Hero](./hero.md) | Home | full-bleed; display h1 with accent, lead, actions, aside; blush gradient, optional photo under a wash | Heading | complete |
| [GroupHeader](./group-header.md) | Group page | pills row + channel link, 48px h1, description, stats in a tint card | Card, FlexGroup, Pill, TextLink, Heading, StatGroup | complete |
| [CTABand](./cta-band.md) | Group page (upcoming gathering) | inverse card with forest glow and raised shadow; eyebrow, title, details, location, actions | Card, Eyebrow, Heading | complete |

## Pages

Phase 5 assembled the designs into real routes, in English and French.

### Routes

| Route | Page | Notes |
|---|---|---|
| `/` | Redirect | [`locale-redirect.tsx`](../../src/app/routes/locale-redirect.tsx) sends `/` to `/en` or `/fr`, picked from the browser's languages (English by default). Once hosted, `_redirects` rules will do this at the edge |
| `/{lang}` | Homepage | Hero with the Meetup Index, group grid (first 6), Slack, "New here?", the group form, updates, FAQ |
| `/{lang}/groups` | Groups directory | Every group, with search and region filters; the "View all groups" target |
| `/{lang}/groups/{slug}` | Group page | Header and stats, organizer and team, resources, next event. Sections without data are left out; unknown slugs return a 404 |

Routes are declared in [`src/app/routes.ts`](../../src/app/routes.ts) and every page is prerendered to static HTML for both locales (the `prerender` list in [`react-router.config.ts`](../../react-router.config.ts)). The localized [`NotFoundPage`](../../src/app/NotFoundPage.tsx) covers unknown slugs and paths in development; the static host serves its own 404 for anything not prerendered.

### i18n

- [`src/i18n/config.ts`](../../src/i18n/config.ts): `locales`, `defaultLocale`, `localeTags` (`en-CA`, `fr-CA` for `Intl`) and each language's name in its own language.
- [`src/i18n/dictionaries/`](../../src/i18n/dictionaries/): one TypeScript dictionary per language. `en.ts` defines the `Dictionary` type and `fr.ts` is typed against it, so a key missing in French fails the build.
- [`useI18n.ts`](../../src/i18n/useI18n.ts): `useI18n()` reads the `:lang` route param, so pages get `{ locale, tag, t }` without prop drilling. `i18nFor(locale)` returns the same object outside a route. The group form takes the locale from a hidden field and calls `dictionaryFor(locale)`.
- [`format.ts`](../../src/i18n/format.ts): `format()` fills `{name}` placeholders and `plural()` picks a form with `Intl.PluralRules`. Templates let word order differ between languages (`'{cadence} meetups'` / `'Rencontres {cadence}'`).
- [`paths.ts`](../../src/i18n/paths.ts): `localeHref()` prefixes internal paths and `alternatesFor()` builds the canonical and hreflang links that [`PageMeta`](../../src/app/PageMeta.tsx) renders for each page.
- The `LocaleSwitcher` swaps the locale segment of the current path, so changing language keeps you on the same page.

### Data

- [`src/data/`](../../src/data/) holds typed **mock data**: 23 groups (6 from the design, WordPress Ottawa with full detail), regions, updates, FAQ, the Slack preview, features and provinces. Text that changes by language is `Localized` (`{ en, fr }`).
- [`src/data/index.ts`](../../src/data/index.ts) has the accessors and formatters (`getGroup`, `getRegions`, `getDirectoryGroups`, `formatEventDetails`…). They're plain functions over static data, so a WP REST or Meetup source can replace them without touching the pages.
- Meetup links are Meetup.com searches for the group's city, and Slack links go to a placeholder, until real URLs exist.

### Features

[`src/features/`](../../src/features/) holds the app's client code:

- `locale/LocaleSwitcher`: the header and footer language toggles.
- `directory/`: `DirectoryProvider` shares the search query and region across sections that sit apart on the page (the hero search and the group grid). A `#region-bc` link from the Meetup Index selects that region and scrolls to the results. `DirectorySearch` and `DirectoryResults` read the context. Search ignores case and accents ("montreal" finds Montréal).
- `group-form/`: `GroupForm` with `useActionState` and `submitGroup`, which runs in the browser (the site is static). It validates and returns localized errors, keeps what was typed, moves focus to the first invalid field, and announces the result in a live region. Nothing is stored yet: `deliverGroupSubmission()` is where a backend plugs in.

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
1. **Foundations** ✅ Icon, Heading, Eyebrow, TextLink, Pill, FilterPill, Avatar (plus token calibration against the designs)
2. **Layout:** complete (Container, SectionHeader, GridGroup, Column, FlexGroup)
3. **Content components** ✅ GroupCard, FeatureItem, StatGroup, PersonCard, ResourceCard, UpdateList, Accordion, Fieldset, TextField, TextArea, Select, SearchField, FilterBar, ChatPreview (plus GridGroup dividers and heading-scale calibration)
4. **Page sections** ✅ LanguageToggle, MeetupIndex, Hero, GroupHeader, CTABand (plus SiteHeader tuned to the design)
5. **Pages** ✅ bilingual homepage, groups directory and group pages from typed mock data (plus the mobile menu, form errors and lighter muted text on forest)

## Resolved

- **Bilingual EN / FR:** `/en` and `/fr` routes with typed dictionaries and no i18n library (see [Pages](#pages)).
- **Mobile nav:** a Menu button below the tablet breakpoint ([SiteHeader](./site-header.md)).
- **Muted text on forest:** the inverse muted role is now `lichen-light` (#8fa79a), about 6:1 on forest; the design's lichen was about 3:1.

## Open questions

- **French copy:** the dictionaries and data were drafted in Québec French and need a native speaker's review before launch.
- **Data source:** mock data for now; later WP REST, the Meetup API, or something else. The accessors in `src/data/index.ts` are the seam.
- **Group form backend:** where submissions go (email, a CRM, WordPress). The form validates and thanks the person but stores nothing.
- **Real links:** each group's Meetup page (currently a city search) and the WP Canada Slack invite (currently WordPress's own Slack sign-up page).
- **Our Story page:** the header links "Our Story" to the homepage's "New here?" section until a page is designed.
- **Imagery:** the hero's misty-forest photo and the people's avatars. Hero renders the blush gradient until `image` is passed; avatars fall back to initials.
- **Figure widths:** the size widths are raw values carried over from Parlour; add layout tokens if Figure gets used.
