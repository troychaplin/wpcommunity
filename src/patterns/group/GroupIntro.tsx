import { Container } from '@/components/Container';
import { GroupHeader } from '@/components/GroupHeader';
import type { Group } from '@/data';
import { regionLabel, slackInviteUrl } from '@/data';
import { format } from '@/i18n/format';
import { useI18n } from '@/i18n/useI18n';

// The group's page heading: its region, Slack channel, description and headline stats
export function GroupIntro({ group }: { group: Group }) {
    const { locale, tag, t } = useI18n();
    const { stats } = t.group;

    return (
        <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
            <GroupHeader
                region={regionLabel(group.region, locale)}
                status={t.group.status}
                channel={{ label: group.slackChannel, href: slackInviteUrl }}
                title={group.name}
                description={(group.description ?? group.summary)[locale]}
                stats={[
                    { value: `${new Intl.NumberFormat(tag).format(group.members)}+`, label: stats.members },
                    { value: t.cadences[group.cadence].label, label: stats.cadence },
                    { value: t.formats[group.format].label, label: t.formats[group.format].detail },
                    { value: format(stats.founded, { year: group.founded }), label: stats.history },
                ]}
            />
        </Container>
    );
}
