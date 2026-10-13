export const locales = ['en', 'fr'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export const hasLocale = (value: string): value is Locale =>
    (locales as readonly string[]).includes(value);

// BCP 47 tags for Intl number, date and plural formatting
export const localeTags: Record<Locale, string> = {
    en: 'en-CA',
    fr: 'fr-CA',
};

// Each language is named in its own language, whatever the page's language
export const languageNames: Record<Locale, { label: string; shortLabel: string }> = {
    en: { label: 'English', shortLabel: 'En' },
    fr: { label: 'Français', shortLabel: 'Fr' },
};
