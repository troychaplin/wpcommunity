import type { Decorator, Meta } from '@storybook/react-vite';
import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import { createRoutesStub } from 'react-router';
import { RouterLink } from '../app/RouterLink';
import { LinkProvider } from '../components/LinkProvider';
import { Main } from '../components/Main';
import { getGroup } from '../data';
import type { Group } from '../data';
import { DirectoryProvider } from '../features/directory/DirectoryProvider';
import { locales } from '../i18n/config';
import type { Locale } from '../i18n/config';

// The group patterns' sample, from the site's own data. Ottawa has every optional detail (an
// organizer and a team, slides, a venue and a next event), so no section drops out.
const requireGroup = (slug: string): Group => {
    const group = getGroup(slug);

    if (!group) {
        throw new Error(`No group "${slug}" in src/data/groups.ts`);
    }

    return group;
};

export const sampleGroup = requireGroup('ottawa');

// Patterns read the locale from the :lang route param, as on the site, so a story mounts its
// pattern at /en or /fr in a memory router. The router is created once; the story reaches its
// route through context, so a re-render doesn't remount it.
const PatternSlot = createContext<ReactNode>(null);

function PatternRoute() {
    return useContext(PatternSlot);
}

const PatternRouter = createRoutesStub([{ path: '/:lang', Component: PatternRoute }]);

export type PatternArgs = { locale: Locale };

// Every pattern story's meta: a locale control and full-width, like the site. Storybook reads
// `title` and `tags` without running the file, so each story sets those itself (with
// `tags: ['!autodocs']`, as the templates do).
export const patternMeta = {
    args: { locale: 'en' as Locale },
    argTypes: {
        locale: { control: 'inline-radio', options: locales },
    },
    parameters: { layout: 'fullscreen' },
} satisfies Partial<Meta<PatternArgs>>;

export interface PatternOptions {
    // The homepage's Main has no padding, so its full-width bands reach the viewport edges; the
    // other pages keep Main's padding
    hasPadding?: boolean;
    // Wraps the pattern in a DirectoryProvider, for the patterns that read the directory
    directory?: boolean;
}

// Renders a pattern in the Main of the page it belongs to, with React Router's Link behind
// component links. Remounts on a locale change so the router starts at the new /en or /fr.
export const withPattern =
    ({ hasPadding = true, directory = false }: PatternOptions = {}): Decorator =>
    function PatternDecorator(Story, { args }) {
        const locale = (args.locale ?? 'en') as Locale;
        const story = directory ? (
            <DirectoryProvider resultsId="groups">
                <Story />
            </DirectoryProvider>
        ) : (
            <Story />
        );

        return (
            <LinkProvider component={RouterLink}>
                <PatternSlot.Provider value={<Main hasPadding={hasPadding}>{story}</Main>}>
                    <PatternRouter key={locale} initialEntries={[`/${locale}`]} />
                </PatternSlot.Provider>
            </LinkProvider>
        );
    };
