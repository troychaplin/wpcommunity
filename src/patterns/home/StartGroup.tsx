import { Column } from '@/components/Column';
import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { GroupForm } from '@/features/group-form/GroupForm';
import { useI18n } from '@/i18n/useI18n';
import { homeSections } from './sections';

// The forest "Start a group" band: the pitch beside the submission form
export function StartGroup() {
    const { t } = useI18n();

    return (
        <Container
            as="section"
            id={homeSections.startGroup}
            color="forest"
            maxWidth="alignfull"
            contentWidth="alignwide"
        >
            <Column cols="1/3">
                <Column.Content>
                    <Heading size="heading-medium">{t.home.startGroup.title}</Heading>
                    <p>{t.home.startGroup.body}</p>
                </Column.Content>
                <Column.Content>
                    <GroupForm />
                </Column.Content>
            </Column>
        </Container>
    );
}
