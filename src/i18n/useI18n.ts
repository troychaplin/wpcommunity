import { useParams } from 'react-router';
import { defaultLocale, hasLocale, localeTags } from './config';
import type { Locale } from './config';
import { dictionaryFor } from './dictionaries';

export type { Dictionary } from './dictionaries';

// The locale, its Intl tag and its dictionary in one object
export const i18nFor = (locale: Locale) => ({ locale, tag: localeTags[locale], t: dictionaryFor(locale) });

// Reads the :lang segment. The :lang layout route rejects unknown locales before anything renders,
// so the default only applies outside it (the root error page).
export const useI18n = () => {
    const { lang } = useParams();

    return i18nFor(lang && hasLocale(lang) ? lang : defaultLocale);
};
