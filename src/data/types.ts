import type { IconName } from '@/components/Icon';
import type { Locale } from '@/i18n/config';

export type Localized<T = string> = Record<Locale, T>;

export type RegionKey = 'bc' | 'prairies' | 'on' | 'qc' | 'atlantic';

export type Cadence = 'monthly' | 'bi-monthly' | 'quarterly';

export type MeetingFormat = 'hybrid' | 'in-person' | 'online';

export type UpdateCategory = 'event' | 'announcement' | 'resource' | 'community';

export interface Region {
    key: RegionKey;
    label: Localized;
    shortLabel: Localized;
}

export interface Person {
    name: string;
    role: Localized;
    handle?: string;
    avatarSrc?: string;
    bio?: Localized;
}

export interface GroupEvent {
    title: Localized;
    // ISO 8601 with the UTC offset, formatted in `timeZone` for display
    startsAt: string;
    timeZone: string;
    location: Localized;
}

export interface Group {
    slug: string;
    name: string;
    city: string;
    region: RegionKey;
    // Card copy; `description` is the longer group page copy and falls back to `summary`
    summary: Localized;
    description?: Localized;
    members: number;
    cadence: Cadence;
    format: MeetingFormat;
    founded: number;
    slackChannel: string;
    slidesUrl?: string;
    venueUrl?: string;
    organizer?: Person;
    team?: Person[];
    nextEvent?: GroupEvent;
}

export interface Update {
    date: string;
    category: UpdateCategory;
    title: Localized;
    excerpt: Localized;
    linkText: Localized;
    // A path without the locale ('/groups/toronto', '/#slack') or a full URL
    href: string;
}

export interface FaqGroup {
    label: Localized;
    items: { question: Localized; answer: Localized }[];
}

export interface SlackMessage {
    author: string;
    time: Localized;
    // Kept in the language it was written in
    text: string;
}

export interface Feature {
    icon: IconName;
    title: Localized;
    text: Localized;
    linkText: Localized;
    href: string;
}

export interface Province {
    code: string;
    name: Localized;
}
