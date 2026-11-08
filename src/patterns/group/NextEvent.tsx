import { Button } from '@/components/Button';
import { ButtonGroup } from '@/components/ButtonGroup';
import { Container } from '@/components/Container';
import { CTABand } from '@/components/CTABand';
import type { Group } from '@/data';
import { formatEventDetails, meetupUrl } from '@/data';
import { useI18n } from '@/i18n/useI18n';

// The group's next meetup, with RSVP and talk-proposal links. Not rendered when nothing is
// scheduled.
export function NextEvent({ group }: { group: Group }) {
    const { locale, tag, t } = useI18n();
    const { nextEvent } = group;

    if (!nextEvent) {
        return null;
    }

    const meetup = meetupUrl(group);

    return (
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
    );
}
