import type { Locale } from '../config';
import { en } from './en';
import { fr } from './fr';

export type { Dictionary } from './en';

const dictionaries = { en, fr };

// Takes the locale explicitly, so it also works in Server Actions and Client Component types
export const dictionaryFor = (locale: Locale) => dictionaries[locale];
