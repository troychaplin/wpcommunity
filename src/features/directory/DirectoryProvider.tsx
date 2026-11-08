'use client';

import { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import { getDirectoryGroups } from '@/data';
import type { DirectoryGroup } from '@/data';
import { useI18n } from '@/i18n/useI18n';

interface DirectoryContextValue {
    groups: DirectoryGroup[];
    matches: DirectoryGroup[];
    query: string;
    setQuery: (query: string) => void;
    region: string;
    setRegion: (region: string) => void;
}

const DirectoryContext = createContext<DirectoryContextValue | null>(null);

export const useDirectory = () => {
    const context = useContext(DirectoryContext);

    if (!context) {
        throw new Error('useDirectory must be used inside a DirectoryProvider');
    }

    return context;
};

// Case- and accent-insensitive, so "montreal" finds Montréal
const normalize = (value: string) =>
    value.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase().trim();

const regionFromHash = (hash: string) => hash.match(/^#region-([\w-]+)$/)?.[1];

const subscribeToHash = (onChange: () => void) => {
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
};

export interface DirectoryProviderProps {
    // The element scrolled into view when a #region- link is followed
    resultsId: string;
    children: React.ReactNode;
}

// Shares the search query and region across sections that sit apart on the page: the hero's
// Meetup Index search and the group grid below it. Region links (#region-bc) pick a region too.
// Builds the page locale's group list itself, so a page only says where its results are.
export function DirectoryProvider({ resultsId, children }: DirectoryProviderProps) {
    const { locale, t } = useI18n();
    const groups = useMemo(
        () => getDirectoryGroups(locale, (cadence) => t.cadences[cadence].inCard),
        [locale, t],
    );
    const [query, setQuery] = useState('');
    const hash = useSyncExternalStore(subscribeToHash, () => window.location.hash, () => '');
    const [choice, setChoice] = useState<{ region: string; hash: string } | null>(null);

    // The latest action wins: a pill choice holds until a new #region- link is followed
    const hashRegion = regionFromHash(hash);
    const knownHashRegion = groups.some((group) => group.region === hashRegion) ? hashRegion : undefined;
    const region = choice && choice.hash === hash ? choice.region : (knownHashRegion ?? 'all');

    useEffect(() => {
        if (knownHashRegion) {
            document.getElementById(resultsId)?.scrollIntoView({ block: 'start' });
        }
    }, [knownHashRegion, resultsId]);

    const matches = useMemo(() => {
        const search = normalize(query);

        return groups.filter(
            (group) =>
                (region === 'all' || group.region === region) &&
                (normalize(group.name).includes(search) || normalize(group.city).includes(search)),
        );
    }, [groups, query, region]);

    const value = useMemo(
        () => ({
            groups,
            matches,
            query,
            setQuery,
            region,
            setRegion: (next: string) => setChoice({ region: next, hash }),
        }),
        [groups, matches, query, region, hash],
    );

    return <DirectoryContext.Provider value={value}>{children}</DirectoryContext.Provider>;
}
