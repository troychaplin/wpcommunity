'use client';

import { useLocation } from 'react-router';
import { LanguageToggle } from '@/components/LanguageToggle';
import { languageNames, locales } from '@/i18n/config';
import type { Locale } from '@/i18n/config';

const localePrefix = new RegExp(`^/(${locales.join('|')})(?=/|$)`);

export interface LocaleSwitcherProps {
    locale: Locale;
    label: string;
    navLabel?: string;
    variant?: 'segmented' | 'list';
}

// Swaps the locale segment of the current path, so changing language keeps the reader on the
// same page: /en/groups/ottawa ↔ /fr/groups/ottawa
export function LocaleSwitcher({ locale, label, navLabel, variant }: LocaleSwitcherProps) {
    const { pathname } = useLocation();
    const rest = pathname.replace(localePrefix, '');

    const languages = locales.map((code) => ({
        code,
        ...languageNames[code],
        href: `/${code}${rest}`,
        isCurrent: code === locale,
    }));

    return <LanguageToggle languages={languages} variant={variant} label={label} navLabel={navLabel} />;
}
