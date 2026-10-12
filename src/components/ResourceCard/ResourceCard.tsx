import { Card } from '../Card';
import { Eyebrow } from '../Eyebrow';
import { Heading } from '../Heading';
import { TextLink } from '../TextLink';
import './styles.scss';

export interface ResourceCardProps {
    label: string;
    title: string;
    description: string;
    href: string;
    linkText: string;
    headingLevel?: 2 | 3 | 4;
    className?: string;
}

export const ResourceCard = ({
    label,
    title,
    description,
    href,
    linkText,
    headingLevel = 3,
    className,
}: ResourceCardProps) => {
    const classes = ['wpc-resource-card', className].filter(Boolean).join(' ');
    const titleTag = `h${headingLevel}` as const;

    return (
        <Card as="article" shadow paddingInline="medium" paddingBlock="medium" className={classes}>
            <Eyebrow>{label}</Eyebrow>
            <Heading as={titleTag} size="x-large">
                {title}
            </Heading>
            <p className="wpc-resource-card__description">{description}</p>
            <TextLink href={href} size="small" hasArrow className="wpc-resource-card__link">
                {linkText}
            </TextLink>
        </Card>
    );
};
