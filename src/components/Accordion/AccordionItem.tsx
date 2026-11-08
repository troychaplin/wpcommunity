import { Icon } from '../Icon';

export interface AccordionItemProps {
    question: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
}

export const AccordionItem = ({ question, children, defaultOpen = false }: AccordionItemProps) => (
    <details className="wpc-accordion__item" open={defaultOpen || undefined}>
        <summary className="wpc-accordion__question">
            <span>{question}</span>
            <Icon name="plus" className="wpc-accordion__icon wpc-accordion__icon--closed" />
            <Icon name="minus" className="wpc-accordion__icon wpc-accordion__icon--open" />
        </summary>
        <div className="wpc-accordion__answer">{children}</div>
    </details>
);

AccordionItem.displayName = 'Accordion.Item';
