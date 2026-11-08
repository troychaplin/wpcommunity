import type { Meta, StoryObj } from '@storybook/react-vite';
import { createRoutesStub } from 'react-router';
import type { LoaderFunction } from 'react-router';
import { RouterLink } from '../app/RouterLink';
import GroupPage, { ErrorBoundary as GroupErrorBoundary, loader as groupLoader } from '../app/routes/group';
import GroupsPage from '../app/routes/groups';
import Home from '../app/routes/home';
import LangLayout from '../app/routes/lang-layout';
import NotFound from '../app/routes/not-found';
import { LinkProvider } from '../components/LinkProvider';
import { locales } from '../i18n/config';
import type { Locale } from '../i18n/config';

// The site's own :lang route tree (src/app/routes.ts), mounted in a memory router. The template
// renders the real homepage, so it can't drift from the site, and its links, language switch,
// directory search and group form all work inside the story.
// The group loader is typed by the route's generated types (params.slug is always set); the stub
// passes the same matched params at runtime but types its loaders generically
const groupStubLoader = groupLoader as unknown as LoaderFunction;

const Site = createRoutesStub([
    {
        path: '/:lang',
        Component: LangLayout,
        children: [
            { index: true, Component: Home },
            { path: 'groups', Component: GroupsPage },
            { path: 'groups/:slug', Component: GroupPage, loader: groupStubLoader, ErrorBoundary: GroupErrorBoundary },
            { path: '*', Component: NotFound },
        ],
    },
]);

type TemplateArgs = { locale: Locale };

const meta = {
    title: 'Overview/Templates',
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['!autodocs'],
    argTypes: {
        locale: { control: 'inline-radio', options: locales },
    },
} satisfies Meta<TemplateArgs>;

export default meta;
type Story = StoryObj<TemplateArgs>;

export const Homepage: Story = {
    args: { locale: 'en' },
    // Remounts on a locale change so the router starts at the new /en or /fr
    render: ({ locale }) => (
        <LinkProvider component={RouterLink}>
            <Site key={locale} initialEntries={[`/${locale}`]} />
        </LinkProvider>
    ),
};
