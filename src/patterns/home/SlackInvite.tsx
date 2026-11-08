import { Button } from '@/components/Button';
import { ChatPreview } from '@/components/ChatPreview';
import { Column } from '@/components/Column';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { slackChannel, slackInviteUrl, slackMessages, slackStats } from '@/data';
import { format } from '@/i18n/format';
import { useI18n } from '@/i18n/useI18n';
import { homeSections } from './sections';

// The sage Slack band: the invite beside a preview of the national channel
export function SlackInvite() {
    const { locale, t } = useI18n();
    const { slack } = t.home;

    return (
        <Container as="section" id={homeSections.slack} color="sage" maxWidth="alignfull" contentWidth="alignwide">
            <Column cols="2">
                <Column.Content>
                    <SectionHeader prefix={slack.eyebrow} title={slack.title} />
                    <p>{slack.body}</p>
                    <Button text={slack.cta} href={slackInviteUrl} />
                </Column.Content>
                <Column.Content>
                    <ChatPreview
                        channel={slackChannel}
                        label={format(slack.previewLabel, { channel: slackChannel })}
                        messages={slackMessages.map((message) => ({
                            author: message.author,
                            time: message.time[locale],
                            text: message.text,
                        }))}
                        stats={slackStats.map((stat) => ({ value: stat.value[locale], label: stat.label[locale] }))}
                    />
                </Column.Content>
            </Column>
        </Container>
    );
}
