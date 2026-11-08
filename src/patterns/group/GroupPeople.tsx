import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Column } from '@/components/Column';
import { Container } from '@/components/Container';
import { FlexGroup } from '@/components/FlexGroup';
import { GridGroup } from '@/components/GridGroup';
import { Heading } from '@/components/Heading';
import { PersonCard } from '@/components/PersonCard';
import type { Group } from '@/data';
import { meetupUrl, slackInviteUrl } from '@/data';
import { format } from '@/i18n/format';
import { useI18n } from '@/i18n/useI18n';

// Who runs the group: the organizer's contact card beside the rest of the team. Either may be
// missing; with neither, the section isn't rendered.
export function GroupPeople({ group }: { group: Group }) {
    const { locale, t } = useI18n();
    const { organizer, team } = group;

    if (!organizer && !team) {
        return null;
    }

    return (
        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
            <Column cols={organizer && team ? '1/3' : '1'}>
                {organizer && (
                    <Column.Content>
                        <PersonCard
                            label={t.group.contactLabel}
                            name={organizer.name}
                            role={organizer.role[locale]}
                            handle={organizer.handle && format(t.group.handleOnSlack, { handle: organizer.handle })}
                            avatarSrc={organizer.avatarSrc}
                            bio={organizer.bio && <p>{organizer.bio[locale]}</p>}
                            headingLevel={2}
                            actions={
                                <>
                                    <Button text={t.group.contact} href={meetupUrl(group)} />
                                    <Button text={t.group.findOnSlack} color="white" href={slackInviteUrl} />
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
    );
}
