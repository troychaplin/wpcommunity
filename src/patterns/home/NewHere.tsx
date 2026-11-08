import { Container } from '@/components/Container';
import { FeatureItem } from '@/components/FeatureItem';
import { GridGroup } from '@/components/GridGroup';
import { SectionHeader } from '@/components/SectionHeader';
import { features } from '@/data';
import { localeHref } from '@/i18n/paths';
import { useI18n } from '@/i18n/useI18n';
import { homeSections } from './sections';

// "New here?": four first steps between rules. The section's rule doubles as the grid's first
// column line, so the heading lines up with the first feature.
export function NewHere() {
    const { locale, t } = useI18n();

    return (
        <Container as="section" id={homeSections.newHere} maxWidth="alignwide" contentWidth="alignwide" hasRule>
            <SectionHeader title={t.home.newHere.title} description={t.home.newHere.description} />
            <GridGroup columns={4} dividers="columns">
                {features.map((feature) => (
                    <FeatureItem
                        key={feature.icon}
                        icon={feature.icon}
                        title={feature.title[locale]}
                        href={localeHref(locale, feature.href)}
                        linkText={feature.linkText[locale]}
                    >
                        {feature.text[locale]}
                    </FeatureItem>
                ))}
            </GridGroup>
        </Container>
    );
}
