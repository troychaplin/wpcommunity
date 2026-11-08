import { Main } from '@/components/Main';
import { DirectoryProvider } from '@/features/directory/DirectoryProvider';
import { useI18n } from '@/i18n/useI18n';
import {
    CommonQuestions,
    CommunityUpdates,
    HomeHero,
    homeSections,
    MeetupGroups,
    NewHere,
    SlackInvite,
    StartGroup,
} from '@/patterns/home';
import { PageMeta } from '../PageMeta';

export default function Home() {
    const { locale, t } = useI18n();

    return (
        <Main hasPadding={false}>
            <PageMeta locale={locale} absoluteTitle={`${t.home.metaTitle} | ${t.meta.siteName}`} path="" />
            {/* The hero's search and the group grid share one directory */}
            <DirectoryProvider resultsId={homeSections.groups}>
                <HomeHero />
                <MeetupGroups />
            </DirectoryProvider>
            <SlackInvite />
            <NewHere />
            <StartGroup />
            <CommunityUpdates />
            <CommonQuestions />
        </Main>
    );
}
