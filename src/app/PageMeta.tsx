import type { Locale } from '@/i18n/config';
import { alternatesFor } from '@/i18n/paths';
import { i18nFor } from '@/i18n/useI18n';

const siteUrl = 'https://wpcommunity.ca';

export interface PageMetaProps {
    locale: Locale;
    // Shown as "Title | Site name". Omit for the site name alone.
    title?: string;
    // Used as is, without the site name
    absoluteTitle?: string;
    // Defaults to the site description
    description?: string;
    // The page's path without the locale prefix ('' for the homepage, '/groups' for the directory).
    // Adds the canonical URL and hreflang alternates; omit it for pages that aren't canonical.
    path?: string;
    noIndex?: boolean;
}

// React 19 hoists <title>, <meta> and <link> into <head>, during prerendering and on client
// navigation alike
export function PageMeta({ locale, title, absoluteTitle, description, path, noIndex = false }: PageMetaProps) {
    const { tag, t } = i18nFor(locale);
    const fullTitle = absoluteTitle ?? (title ? `${title} | ${t.meta.siteName}` : t.meta.siteName);
    const summary = description ?? t.meta.description;
    const alternates = path === undefined ? undefined : alternatesFor(locale, path);

    return (
        <>
            <title>{fullTitle}</title>
            <meta name="description" content={summary} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}
            {alternates && <link rel="canonical" href={`${siteUrl}${alternates.canonical}`} />}
            {alternates &&
                Object.entries(alternates.languages).map(([hrefLang, href]) => (
                    <link key={hrefLang} rel="alternate" hrefLang={hrefLang} href={`${siteUrl}${href}`} />
                ))}
            <meta property="og:site_name" content={t.meta.siteName} />
            <meta property="og:locale" content={tag.replace('-', '_')} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={summary} />
            {alternates && <meta property="og:url" content={`${siteUrl}${alternates.canonical}`} />}
        </>
    );
}
