import { Container } from '@/components/Container';
import { Eyebrow } from '@/components/Eyebrow';
import { FlexGroup } from '@/components/FlexGroup';
import { Heading } from '@/components/Heading';
import { Main } from '@/components/Main';
import { getDirectoryGroups, getRegions } from '@/data';
import { DirectoryProvider } from '@/features/directory/DirectoryProvider';
import { DirectoryResults } from '@/features/directory/DirectoryResults';
import { DirectorySearch } from '@/features/directory/DirectorySearch';
import { useI18n } from '@/i18n/useI18n';
import { PageMeta } from '../PageMeta';

export default function GroupsPage() {
    const { locale, tag, t } = useI18n();
    const groups = getDirectoryGroups(locale, (cadence) => t.cadences[cadence].inCard);
    const regions = getRegions(locale);

    return (
        <Main>
            <PageMeta
                locale={locale}
                title={t.groupsPage.title}
                description={t.groupsPage.description}
                path="/groups"
            />
            <DirectoryProvider groups={groups} resultsId="groups">
                <Container as="section" id="groups" maxWidth="alignwide" contentWidth="alignwide">
                    <FlexGroup direction="column" gap="small">
                        <Eyebrow tone="accent">{t.groupsPage.eyebrow}</Eyebrow>
                        <Heading as="h1" size="heading-large">
                            {t.groupsPage.title}
                        </Heading>
                        <p>{t.groupsPage.description}</p>
                    </FlexGroup>
                    <DirectorySearch label={t.directory.searchLabel} placeholder={t.directory.searchPlaceholder} />
                    <DirectoryResults
                        regions={[
                            { value: 'all', label: t.directory.allRegions },
                            ...regions.map((region) => ({ value: region.key, label: region.shortLabel })),
                        ]}
                        labels={t.directory}
                        groupsPath={`/${locale}/groups`}
                        localeTag={tag}
                        cardHeadingLevel={2}
                    />
                </Container>
            </DirectoryProvider>
        </Main>
    );
}
