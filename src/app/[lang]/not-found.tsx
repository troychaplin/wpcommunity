import type { Metadata } from 'next';
import { ButtonGroup } from '@/components/ButtonGroup';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import { FlexGroup } from '@/components/FlexGroup';
import { Heading } from '@/components/Heading';
import { Main } from '@/components/Main';
import { getI18n } from '@/i18n/getDictionary';

export async function generateMetadata(): Promise<Metadata> {
    const { t } = await getI18n();

    return { title: t.notFound.metaTitle };
}

export default async function NotFound() {
    const { locale, t } = await getI18n();

    return (
        <Main>
            <Container as="section" maxWidth="alignwide" contentWidth="aligncontent">
                <FlexGroup direction="column" gap="medium">
                    <Heading as="h1" size="heading-large">
                        {t.notFound.title}
                    </Heading>
                    <p>{t.notFound.body}</p>
                    <ButtonGroup>
                        <Button text={t.notFound.home} href={`/${locale}`} />
                        <Button text={t.notFound.groups} color="secondary" href={`/${locale}/groups`} />
                    </ButtonGroup>
                </FlexGroup>
            </Container>
        </Main>
    );
}
