import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { FlexGroup } from '@/components/FlexGroup';
import { Heading } from '@/components/Heading';
import { DirectoryResults } from '@/features/directory/DirectoryResults';
import { DirectorySearch } from '@/features/directory/DirectorySearch';
import { useI18n } from '@/i18n/useI18n';

// The full directory: the page heading, the search and every group with the region filter.
// Renders inside a DirectoryProvider.
export function GroupDirectory() {
    const { t } = useI18n();
    const { groupsPage } = t;

    return (
        <Container as="section" id="groups" maxWidth="alignwide" contentWidth="alignwide">
            <FlexGroup direction="column" gap="small">
                <Eyebrow tone="accent">{groupsPage.eyebrow}</Eyebrow>
                <Heading as="h1" size="heading-large">
                    {groupsPage.title}
                </Heading>
                <p>{groupsPage.description}</p>
            </FlexGroup>
            <DirectorySearch />
            {/* The page heading is the h1, so each card's name is an h2 */}
            <DirectoryResults cardHeadingLevel={2} />
        </Container>
    );
}
