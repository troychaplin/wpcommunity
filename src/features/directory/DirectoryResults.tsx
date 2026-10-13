'use client';

import { Eyebrow } from '@/components/Eyebrow';
import { FilterBar } from '@/components/FilterBar';
import type { FilterBarOption } from '@/components/FilterBar';
import { FlexGroup } from '@/components/FlexGroup';
import { GridGroup } from '@/components/GridGroup';
import { GroupCard } from '@/components/GroupCard';
import { TextLink } from '@/components/TextLink';
import { format } from '@/i18n/format';
import { useDirectory } from './DirectoryProvider';

export interface DirectoryResultsLabels {
    regionLabel: string;
    showing: string;
    viewAll: string;
    empty: string;
    card: {
        linkText: string;
        membersFormat: string;
        cadenceFormat: string;
    };
}

export interface DirectoryResultsProps {
    regions: FilterBarOption[];
    labels: DirectoryResultsLabels;
    // The locale-prefixed groups path; each card links to `${groupsPath}/${slug}`
    groupsPath: string;
    localeTag: string;
    limit?: number;
    viewAllHref?: string;
    // The card titles' level: 3 under a section h2, 2 directly under the page h1
    cardHeadingLevel?: 2 | 3;
}

export function DirectoryResults({
    regions,
    labels,
    groupsPath,
    localeTag,
    limit,
    viewAllHref,
    cardHeadingLevel = 3,
}: DirectoryResultsProps) {
    const { matches, region, setRegion } = useDirectory();
    const visible = limit === undefined ? matches : matches.slice(0, limit);

    return (
        <>
            <FilterBar label={labels.regionLabel} options={regions} value={region} onChange={setRegion} />
            {visible.length > 0 ? (
                <GridGroup columns={3} dividers="all">
                    {visible.map((group) => (
                        <GroupCard
                            key={group.slug}
                            region={group.regionLabel}
                            name={group.name}
                            description={group.summary}
                            members={group.members}
                            cadence={group.cadenceLabel}
                            href={`${groupsPath}/${group.slug}`}
                            linkText={labels.card.linkText}
                            membersFormat={labels.card.membersFormat}
                            cadenceFormat={labels.card.cadenceFormat}
                            locale={localeTag}
                            headingLevel={cardHeadingLevel}
                        />
                    ))}
                </GridGroup>
            ) : (
                <p>{labels.empty}</p>
            )}
            <FlexGroup justify="space-between" align="center" gap="small">
                <Eyebrow aria-live="polite">
                    {format(labels.showing, { shown: visible.length, total: matches.length })}
                </Eyebrow>
                {viewAllHref && <TextLink href={viewAllHref}>{labels.viewAll}</TextLink>}
            </FlexGroup>
        </>
    );
}
