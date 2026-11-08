import { ButtonGroup } from '@/components/ButtonGroup';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FlexGroup } from '@/components/FlexGroup';
import { Heading } from '@/components/Heading';
import { Main } from '@/components/Main';
import type { Locale } from '@/i18n/config';
import { i18nFor } from '@/i18n/useI18n';
import { PageMeta } from './PageMeta';

// Shared by the :lang catch-all route, the group page's unknown-slug boundary and the root error
// boundary. Takes the locale as a prop because the root boundary renders outside the :lang route.
export function NotFoundPage({ locale }: { locale: Locale }) {
    const { t } = i18nFor(locale);

    return (
        <Main>
            <PageMeta locale={locale} title={t.notFound.metaTitle} noIndex />
            <Container as="section" maxWidth="alignwide" contentWidth="aligncontent">
                <FlexGroup direction="column" gap="medium">
                    <Heading as="h1" size="heading-large">
                        {t.notFound.title}
                    </Heading>
                    <p>{t.notFound.body}</p>
                    <ButtonGroup>
                        <Button text={t.notFound.home} href={`/${locale}`} />
                        <Button text={t.notFound.groups} color="white" href={`/${locale}/groups`} />
                    </ButtonGroup>
                </FlexGroup>
            </Container>
        </Main>
    );
}
