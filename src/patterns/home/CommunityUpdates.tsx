import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { FlexGroup } from '@/components/FlexGroup';
import { SectionHeader } from '@/components/SectionHeader';
import { UpdateList } from '@/components/UpdateList';
import { formatShortDate, totalUpdates, updates } from '@/data';
import { format } from '@/i18n/format';
import { localeHref } from '@/i18n/paths';
import { useI18n } from '@/i18n/useI18n';
import { homeSections } from './sections';

// The latest community updates, centred at the content width, and how many there are in all
export function CommunityUpdates() {
    const { locale, tag, t } = useI18n();

    return (
        <Container as="section" id={homeSections.updates} maxWidth="alignwide" contentWidth="aligncontent">
            <SectionHeader title={t.home.updates.title} align="center" />
            <UpdateList>
                {updates.map((update) => (
                    <UpdateList.Item
                        key={update.date}
                        date={formatShortDate(update.date, tag)}
                        dateTime={update.date}
                        category={t.updateCategories[update.category]}
                        title={update.title[locale]}
                        excerpt={update.excerpt[locale]}
                        href={localeHref(locale, update.href)}
                        linkText={update.linkText[locale]}
                    />
                ))}
            </UpdateList>
            <FlexGroup justify="center">
                <Eyebrow>{format(t.home.updates.count, { shown: updates.length, total: totalUpdates })}</Eyebrow>
            </FlexGroup>
        </Container>
    );
}
