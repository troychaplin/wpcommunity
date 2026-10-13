'use client';

import { SearchField } from '@/components/SearchField';
import { useDirectory } from './DirectoryProvider';

export interface DirectorySearchProps {
    label: string;
    placeholder: string;
}

export function DirectorySearch({ label, placeholder }: DirectorySearchProps) {
    const { query, setQuery } = useDirectory();

    return (
        <SearchField
            label={label}
            placeholder={placeholder}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
        />
    );
}
