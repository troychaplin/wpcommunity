import { notFound } from 'next/navigation';
import { lang } from 'next/root-params';
import { hasLocale, localeTags } from './config';
import type { Locale } from './config';
import { dictionaryFor } from './dictionaries';

export type { Dictionary } from './dictionaries';

// Server Components only: next/root-params reads the [lang] segment above the root layout
export const getLocale = async (): Promise<Locale> => {
    const value = await lang();

    if (!hasLocale(value)) {
        notFound();
    }

    return value;
};

export const getDictionary = async () => dictionaryFor(await getLocale());

// The locale, its Intl tag and its dictionary in one call, for pages and layouts
export const getI18n = async () => {
    const locale = await getLocale();

    return { locale, tag: localeTags[locale], t: dictionaryFor(locale) };
};
