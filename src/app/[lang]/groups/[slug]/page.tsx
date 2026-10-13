import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Button } from '@/components/Button';
import { ButtonGroup } from '@/components/ButtonGroup';
import { Card } from '@/components/Card';
import { Column } from '@/components/Column';
import { Container } from '@/components/Container';
import { CTABand } from '@/components/CTABand';
import { FlexGroup } from '@/components/FlexGroup';
import { GridGroup } from '@/components/GridGroup';
import { GroupHeader } from '@/components/GroupHeader';
import { Heading } from '@/components/Heading';
import { Main } from '@/components/Main';
import { PersonCard } from '@/components/PersonCard';
import { ResourceCard } from '@/components/ResourceCard';
import { SectionHeader } from '@/components/SectionHeader';
import { formatEventDetails, getGroup, getGroups, meetupUrl, regionLabel, slackInviteUrl } from '@/data';
import { format } from '@/i18n/format';
import { getI18n } from '@/i18n/getDictionary';
import { alternatesFor } from '@/i18n/paths';

// Every group is prerendered, so navigating here waits only for a static payload. Reading the slug
// outside Suspense keeps a real 404 status for unknown slugs; inside Suspense the shell would
// already have streamed with a 200.
export const instant = false;

export async function generateStaticParams() {
    return getGroups().map((group) => ({ slug: group.slug }));
}

export async function generateMetadata({ params }: PageProps<'/[lang]/groups/[slug]'>): Promise<Metadata> {
    const { slug } = await params;
    const group = getGroup(slug);
    const { locale } = await getI18n();

    if (!group) {
        notFound();
    }

    return {
        title: group.name,
        description: group.summary[locale],
        alternates: alternatesFor(locale, `/groups/${slug}`),
    };
}

export default async function GroupPage({ params }: PageProps<'/[lang]/groups/[slug]'>) {
    const { slug } = await params;
    const group = getGroup(slug);

    if (!group) {
        notFound();
    }

    const { locale, tag, t } = await getI18n();
    const meetup = meetupUrl(group);
    const { resources } = t.group;
    const { organizer, team, nextEvent } = group;

    const resourceLinks = [
        { ...resources.meetup, href: meetup },
        {
            ...resources.slack,
            title: format(resources.slack.title, { channel: group.slackChannel }),
            href: slackInviteUrl,
        },
        group.slidesUrl && { ...resources.slides, href: group.slidesUrl },
        group.venueUrl && { ...resources.venue, href: group.venueUrl },
    ].filter((resource) => !!resource);

    return (
        <Main>
            <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
                <GroupHeader
                    region={regionLabel(group.region, locale)}
                    status={t.group.status}
                    channel={{ label: group.slackChannel, href: slackInviteUrl }}
                    title={group.name}
                    description={(group.description ?? group.summary)[locale]}
                    stats={[
                        {
                            value: `${new Intl.NumberFormat(tag).format(group.members)}+`,
                            label: t.group.stats.members,
                        },
                        { value: t.cadences[group.cadence].label, label: t.group.stats.cadence },
                        { value: t.formats[group.format].label, label: t.formats[group.format].detail },
                        {
                            value: format(t.group.stats.founded, { year: group.founded }),
                            label: t.group.stats.history,
                        },
                    ]}
                />
            </Container>

            {(organizer || team) && (
                <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
                    <Column cols={organizer && team ? '1/3' : '1'} maxWidth="alignwide">
                        {organizer && (
                            <Column.Content>
                                <PersonCard
                                    label={t.group.contactLabel}
                                    name={organizer.name}
                                    role={organizer.role[locale]}
                                    handle={
                                        organizer.handle &&
                                        format(t.group.handleOnSlack, { handle: organizer.handle })
                                    }
                                    avatarSrc={organizer.avatarSrc}
                                    bio={organizer.bio && <p>{organizer.bio[locale]}</p>}
                                    headingLevel={2}
                                    actions={
                                        <>
                                            <Button text={t.group.contact} href={meetup} />
                                            <Button
                                                text={t.group.findOnSlack}
                                                color="secondary"
                                                href={slackInviteUrl}
                                            />
                                        </>
                                    }
                                />
                            </Column.Content>
                        )}
                        {team && (
                            <Column.Content>
                                <Card shadow paddingInline="medium" paddingBlock="medium">
                                    <FlexGroup direction="column" gap="medium">
                                        <Heading size="heading-medium">{t.group.team}</Heading>
                                        <GridGroup as="ul" columns={3} gap="small">
                                            {team.map((person) => (
                                                <li key={person.name}>
                                                    <PersonCard
                                                        variant="compact"
                                                        name={person.name}
                                                        role={person.role[locale]}
                                                        handle={person.handle}
                                                        avatarSrc={person.avatarSrc}
                                                    />
                                                </li>
                                            ))}
                                        </GridGroup>
                                    </FlexGroup>
                                </Card>
                            </Column.Content>
                        )}
                    </Column>
                </Container>
            )}

            <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
                <SectionHeader
                    title={resources.title}
                    meta={format(resources.meta, { count: String(resourceLinks.length).padStart(2, '0') })}
                    hasDivider
                />
                <GridGroup columns={4} gap="small">
                    {resourceLinks.map((resource) => (
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

            {nextEvent && (
                <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
                    <CTABand
                        eyebrow={t.group.event.eyebrow}
                        title={nextEvent.title[locale]}
                        details={formatEventDetails(nextEvent, tag)}
                        location={nextEvent.location[locale]}
                        actions={
                            <ButtonGroup>
                                <Button text={t.group.event.rsvp} href={meetup} />
                                <Button text={t.group.event.propose} color="inverse" href={meetup} />
                            </ButtonGroup>
                        }
                    />
                </Container>
            )}
        </Main>
    );
}
