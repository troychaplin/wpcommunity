'use client';

import { Eyebrow } from '@/components/Eyebrow';
import { FilterBar } from '@/components/FilterBar';
import { FlexGroup } from '@/components/FlexGroup';
import { GridGroup } from '@/components/GridGroup';
import { GroupCard } from '@/components/GroupCard';
import { TextLink } from '@/components/TextLink';
import { getRegions } from '@/data';
import { format } from '@/i18n/format';
import { useI18n } from '@/i18n/useI18n';
import { useDirectory } from './DirectoryProvider';

export interface DirectoryResultsProps {
    // Show only the first `limit` matches
    limit?: number;
    // Close with a link to the full directory
    showViewAll?: boolean;
    // The card titles' level: 3 under a section h2, 2 directly under the page h1
    cardHeadingLevel?: 2 | 3;
}

// The region filter, the matching group cards and the count, in the page locale. Each card links
// to its group page under the locale's directory.
export function DirectoryResults({ limit, showViewAll = false, cardHeadingLevel = 3 }: DirectoryResultsProps) {
    const { locale, tag, t } = useI18n();
    const { matches, region, setRegion } = useDirectory();
    const visible = limit === undefined ? matches : matches.slice(0, limit);
    const labels = t.directory;
    const groupsPath = `/${locale}/groups`;
    const regions = [
        { value: 'all', label: labels.allRegions },
        ...getRegions(locale).map((summary) => ({ value: summary.key, label: summary.shortLabel })),
    ];

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
                            locale={tag}
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
                {showViewAll && <TextLink href={groupsPath}>{labels.viewAll}</TextLink>}
            </FlexGroup>
        </>
    );
}
