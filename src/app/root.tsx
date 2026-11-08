import type { ReactNode } from 'react';
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useParams } from 'react-router';
import { Body } from '@/components/Body';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { LinkProvider } from '@/components/LinkProvider';
import { Main } from '@/components/Main';
import { defaultLocale, hasLocale } from '@/i18n/config';
import type { Route } from './+types/root';
import { NotFoundPage } from './NotFoundPage';
import { RouterLink } from './RouterLink';
import '@/styles/fonts';
import '@/styles/main.scss';

export const links: Route.LinksFunction = () => [{ rel: 'icon', href: '/favicon.ico' }];

export function Layout({ children }: { children: ReactNode }) {
    const { lang } = useParams();

    return (
        <html lang={lang && hasLocale(lang) ? lang : defaultLocale}>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <Meta />
                <Links />
            </head>
            <Body>
                {children}
                <ScrollRestoration />
                <Scripts />
            </Body>
        </html>
    );
}

export default function App() {
    return (
        <LinkProvider component={RouterLink}>
            <Outlet />
        </LinkProvider>
    );
}

// Unexpected errors, and any 404 the router raises itself. It renders without the site header and
// footer, which belong to the :lang layout.
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
    if (isRouteErrorResponse(error) && error.status === 404) {
        return <NotFoundPage locale={defaultLocale} />;
    }

    return (
        <Main>
            <Container as="section" maxWidth="alignwide" contentWidth="aligncontent">
                <Heading as="h1" size="heading-large">
                    Something went wrong
                </Heading>
                {import.meta.env.DEV && error instanceof Error && <pre>{error.stack}</pre>}
            </Container>
        </Main>
    );
}
