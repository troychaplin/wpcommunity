import { Container } from '@/components/Container';
import { GridGroup } from '@/components/GridGroup';
import { ResourceCard } from '@/components/ResourceCard';
import { SectionHeader } from '@/components/SectionHeader';
import type { Group } from '@/data';
import { meetupUrl, slackInviteUrl } from '@/data';
import { format } from '@/i18n/format';
import { useI18n } from '@/i18n/useI18n';

// Where to find the group: Meetup and Slack always, then its slides and venue when it has them
export function GroupResources({ group }: { group: Group }) {
    const { t } = useI18n();
    const { resources } = t.group;

    const links = [
        { ...resources.meetup, href: meetupUrl(group) },
        {
            ...resources.slack,
            title: format(resources.slack.title, { channel: group.slackChannel }),
            href: slackInviteUrl,
        },
        group.slidesUrl && { ...resources.slides, href: group.slidesUrl },
        group.venueUrl && { ...resources.venue, href: group.venueUrl },
    ].filter((resource) => !!resource);

    return (
        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
            <SectionHeader
                title={resources.title}
                meta={format(resources.meta, { count: String(links.length).padStart(2, '0') })}
                hasDivider
            />
            <GridGroup columns={4} gap="small">
                {links.map((resource) => (
                    <ResourceCard
                        key={resource.label}
                        label={resource.label}
                        title={resource.title}
                        description={resource.description}
                        href={resource.href}
                        linkText={resource.linkText}
                    />
                ))}
            </GridGroup>
        </Container>
    );
}
