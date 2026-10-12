import { Eyebrow } from '../Eyebrow';
import { AccordionItem } from './AccordionItem';
import './styles.scss';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    label?: string;
}

export const AccordionWrapper = ({ children, label, className, ...rest }: AccordionProps) => {
    const classes = ['wpc-accordion', className].filter(Boolean).join(' ');

    return (
        <div className={classes} {...rest}>
            {label && <Eyebrow className="wpc-accordion__label">{label}</Eyebrow>}
            {children}
        </div>
    );
};

export const Accordion = Object.assign(AccordionWrapper, {
    Item: AccordionItem,
});

AccordionWrapper.displayName = 'Accordion';
