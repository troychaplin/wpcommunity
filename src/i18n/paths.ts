import { defaultLocale, localeTags, locales } from './config';
import type { Locale } from './config';

// Prefixes an internal path with the locale: '/groups' → '/en/groups', '/#slack' → '/en#slack'.
// Full URLs pass through unchanged.
export const localeHref = (locale: Locale, path: string) => {
    if (/^https?:\/\//.test(path)) {
        return path;
    }

    if (path === '/') {
        return `/${locale}`;
    }

    if (path.startsWith('/#')) {
        return `/${locale}${path.slice(1)}`;
    }

    return `/${locale}${path}`;
};

// Canonical and hreflang links for a page that exists in every locale. `path` has no locale
// prefix: '' for the homepage, '/groups' for the directory.
export const alternatesFor = (locale: Locale, path: string) => ({
    canonical: `/${locale}${path}`,
    languages: {
        ...Object.fromEntries(locales.map((code) => [localeTags[code], `/${code}${path}`])),
        'x-default': `/${defaultLocale}${path}`,
    },
});
