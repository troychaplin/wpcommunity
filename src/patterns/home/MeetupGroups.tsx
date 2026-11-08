import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { useDirectory } from '@/features/directory/DirectoryProvider';
import { DirectoryResults } from '@/features/directory/DirectoryResults';
import { format } from '@/i18n/format';
import { useI18n } from '@/i18n/useI18n';
import { homeSections } from './sections';

// The first six groups with the region filter, and a link to the full directory. Renders inside
// the page's DirectoryProvider, which the hero's search shares.
export function MeetupGroups() {
    const { t } = useI18n();
    const { groups } = useDirectory();

    return (
        <Container as="section" id={homeSections.groups} maxWidth="alignwide" contentWidth="alignwide">
            <SectionHeader
                title={t.home.groups.title}
                meta={format(t.home.groups.meta, { count: groups.length })}
                hasDivider
            />
            <DirectoryResults limit={6} showViewAll />
        </Container>
    );
}
