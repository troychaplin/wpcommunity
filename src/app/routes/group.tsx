import { data } from 'react-router';
import { Main } from '@/components/Main';
import { getGroup } from '@/data';
import { useI18n } from '@/i18n/useI18n';
import { GroupIntro, GroupPeople, GroupResources, NextEvent } from '@/patterns/group';
import { PageMeta } from '../PageMeta';
import type { Route } from './+types/group';
import { NotFoundPage } from '../NotFoundPage';

// Every group is prerendered (see react-router.config.ts), so this runs at build time. An unknown
// slug only reaches it in development; the static host answers those with its own 404.
export function loader({ params }: Route.LoaderArgs) {
    if (!getGroup(params.slug)) {
        throw data(null, { status: 404 });
    }

    return null;
}

// Renders inside the :lang layout, so the 404 keeps the site header and footer
export function ErrorBoundary() {
    const { locale } = useI18n();

    return <NotFoundPage locale={locale} />;
}

export default function GroupPage({ params }: Route.ComponentProps) {
    const { slug } = params;
    const group = getGroup(slug);
    const { locale } = useI18n();

    // The loader has already rejected unknown slugs
    if (!group) {
        return null;
    }

    return (
        <Main>
            <PageMeta
                locale={locale}
                title={group.name}
                description={group.summary[locale]}
                path={`/groups/${slug}`}
            />
            <GroupIntro group={group} />
            <GroupPeople group={group} />
            <GroupResources group={group} />
            <NextEvent group={group} />
        </Main>
    );
}
