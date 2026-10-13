import type { Locale } from '@/i18n/config';
import { groups, regions } from './groups';
import type { Cadence, Group, GroupEvent, Localized, RegionKey } from './types';

export * from './content';
export type * from './types';

export const localize = <T>(value: Localized<T>, locale: Locale): T => value[locale];

export const getGroups = () => groups;

export const getGroup = (slug: string) => groups.find((group) => group.slug === slug);

export interface RegionSummary {
    key: RegionKey;
    label: string;
    shortLabel: string;
    count: number;
}

export const getRegions = (locale: Locale): RegionSummary[] =>
    regions.map(({ key, label, shortLabel }) => ({
        key,
        label: label[locale],
        shortLabel: shortLabel[locale],
        count: groups.filter((group) => group.region === key).length,
    }));

export const regionLabel = (key: RegionKey, locale: Locale) =>
    regions.find((region) => region.key === key)?.label[locale] ?? key;

// The serializable shape the client-side directory filters
export interface DirectoryGroup {
    slug: string;
    name: string;
    city: string;
    region: RegionKey;
    regionLabel: string;
    summary: string;
    members: number;
    cadenceLabel: string;
}

export const getDirectoryGroups = (
    locale: Locale,
    cadenceLabel: (cadence: Cadence) => string,
): DirectoryGroup[] =>
    groups.map((group) => ({
        slug: group.slug,
        name: group.name,
        city: group.city,
        region: group.region,
        regionLabel: regionLabel(group.region, locale),
        summary: group.summary[locale],
        members: group.members,
        cadenceLabel: cadenceLabel(group.cadence),
    }));

// A Meetup.com search for the group's city. Real data would link the group's own Meetup page.
export const meetupUrl = (group: Group) =>
    `https://www.meetup.com/find/?keywords=${encodeURIComponent(`WordPress ${group.city}`)}`;

// The event's date and time, in the event's own time zone: ['Thursday, November 12', '6:30 p.m. EST']
export const formatEventDetails = (event: GroupEvent, tag: string) => {
    const startsAt = new Date(event.startsAt);

    return [
        new Intl.DateTimeFormat(tag, {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            timeZone: event.timeZone,
        }).format(startsAt),
        new Intl.DateTimeFormat(tag, {
            hour: 'numeric',
            minute: '2-digit',
            timeZoneName: 'short',
            timeZone: event.timeZone,
        }).format(startsAt),
    ];
};

// A short calendar date for update lists: 'Sep 12' / '12 sept.'
export const formatShortDate = (date: string, tag: string) =>
    new Intl.DateTimeFormat(tag, { month: 'short', day: 'numeric', timeZone: 'UTC' }).format(
        new Date(`${date}T00:00:00Z`),
    );
