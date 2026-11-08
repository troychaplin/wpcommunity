import { Main } from '@/components/Main';
import { DirectoryProvider } from '@/features/directory/DirectoryProvider';
import { useI18n } from '@/i18n/useI18n';
import { GroupDirectory } from '@/patterns/groups';
import { PageMeta } from '../PageMeta';

export default function GroupsPage() {
    const { locale, t } = useI18n();

    return (
        <Main>
            <PageMeta
                locale={locale}
                title={t.groupsPage.title}
                description={t.groupsPage.description}
                path="/groups"
            />
            <DirectoryProvider resultsId="groups">
                <GroupDirectory />
            </DirectoryProvider>
        </Main>
    );
}
