import { Accordion } from '@/components/Accordion';
import { Container } from '@/components/Container';
import { SectionHeader } from '@/components/SectionHeader';
import { faq } from '@/data';
import { useI18n } from '@/i18n/useI18n';
import { homeSections } from './sections';

// The FAQ on a sage band at the content width, one accordion per topic. The first question opens
// by default.
export function CommonQuestions() {
    const { locale, t } = useI18n();

    return (
        <Container as="section" id={homeSections.faq} color="sage" maxWidth="alignfull" contentWidth="aligncontent">
            <SectionHeader title={t.home.faq.title} description={t.home.faq.description} />
            {faq.map((group, groupIndex) => (
                <Accordion key={group.label.en} label={group.label[locale]}>
                    {group.items.map((item, itemIndex) => (
                        <Accordion.Item
                            key={item.question.en}
                            question={item.question[locale]}
                            defaultOpen={groupIndex === 0 && itemIndex === 0}
                        >
                            <p>{item.answer[locale]}</p>
                        </Accordion.Item>
                    ))}
                </Accordion>
            ))}
        </Container>
    );
}
