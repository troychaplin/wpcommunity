'use client';

import { SearchField } from '@/components/SearchField';
import { useI18n } from '@/i18n/useI18n';
import { useDirectory } from './DirectoryProvider';

// The directory's search field, labelled in the page locale
export function DirectorySearch() {
    const { t } = useI18n();
    const { query, setQuery } = useDirectory();

    return (
        <SearchField
            label={t.directory.searchLabel}
            placeholder={t.directory.searchPlaceholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
        />
    );
}
