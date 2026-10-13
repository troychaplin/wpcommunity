import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { defaultLocale, hasLocale, locales } from '@/i18n/config';

// The highest-ranked language in Accept-Language that the site offers:
// 'fr-CA,fr;q=0.9,en;q=0.8' → 'fr'. Falls back to English.
const preferredLocale = (header: string | null) => {
    const ranked = (header ?? '')
        .split(',')
        .map((entry) => {
            const [range, ...params] = entry.trim().split(';');
            const quality = params.map((param) => param.trim()).find((param) => param.startsWith('q='));

            return {
                language: range.split('-')[0].toLowerCase(),
                quality: quality ? Number(quality.slice(2)) : 1,
            };
        })
        .filter(({ quality }) => quality > 0)
        .sort((a, b) => b.quality - a.quality);

    return ranked.map(({ language }) => language).find(hasLocale) ?? defaultLocale;
};

// Every page lives under /en or /fr. A path without a locale is redirected to the reader's
// preferred one: / → /fr, /groups/ottawa → /en/groups/ottawa
export function proxy(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const hasLocalePrefix = locales.some(
        (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`),
    );

    if (hasLocalePrefix) {
        return;
    }

    const url = request.nextUrl.clone();
    url.pathname = `/${preferredLocale(request.headers.get('accept-language'))}${pathname === '/' ? '' : pathname}`;

    return NextResponse.redirect(url);
}

export const config = {
    // Skips Next internals, API routes and files with an extension (favicon.ico, globe.svg)
    matcher: ['/((?!_next|api|.*\\..*).*)'],
};
