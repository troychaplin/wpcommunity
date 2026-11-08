# Article

A semantic `<article>` wrapper for self-contained content. Accepts JSX children, or a raw HTML string through `content` for CMS-sourced content.

**Status:** complete

## When to use

- Wrap a self-contained piece of content (a post, an update, a page body) inside [`Main`](./main.md) and a [`Container`](./container.md).
- Use `content` when the HTML arrives as a string, such as from the WordPress REST API.

## Used in

Not in the two designs yet; intended for content pages and community update detail pages.

## Import

```tsx
import { Article } from '@/components/Article';
```

## Basic usage

```tsx
<Article>
  <h2>WordPress Toronto hosts Full Site Editing workshop</h2>
  <p>Last week's hands-on session walked members through block themes…</p>
</Article>

<Article content={post.content.rendered} />
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `children` | `ReactNode` | — | Article content |
| `content` | `string` | — | HTML string; rendered with `dangerouslySetInnerHTML` and takes precedence over `children` |

## CSS classes

None. It renders a plain `<article>`; prose styling comes from the base styles and `Main`.

## Design tokens

None.

## Accessibility

- `<article>` is exposed as a region screen reader users can navigate to. Give each article a heading.
- `content` bypasses React's escaping. Only pass HTML from a trusted, sanitised source.
