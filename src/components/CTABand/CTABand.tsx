import { Card } from '../Card';
import { Eyebrow } from '../Eyebrow';
import { Heading } from '../Heading';
import './styles.scss';

export interface CTABandProps {
    eyebrow?: string;
    title: string;
    details?: string[];
    location?: React.ReactNode;
    actions?: React.ReactNode;
    headingLevel?: 2 | 3;
    className?: string;
}

export const CTABand = ({
    eyebrow,
    title,
    details,
    location,
    actions,
    headingLevel = 2,
    className,
}: CTABandProps) => {
    const classes = ['wpc-cta-band', className].filter(Boolean).join(' ');
    const titleTag = `h${headingLevel}` as const;

    return (
        <Card
            as="section"
            backgroundColor="forest"
            border={false}
            borderRadius="md"
            paddingInline="medium"
            paddingBlock="large"
            className={classes}
        >
            <div className="wpc-cta-band__content">
                {eyebrow && <Eyebrow tone="accent">{eyebrow}</Eyebrow>}
                <Heading as={titleTag} size="heading-medium">
                    {title}
                </Heading>
                {details && details.length > 0 && (
                    <p className="wpc-cta-band__details">
                        {details.map((detail, index) => (
                            <span key={detail}>
                                {index > 0 && (
                                    <span className="wpc-cta-band__separator" aria-hidden="true">
                                        ·
                                    </span>
                                )}
                                {detail}
                            </span>
                        ))}
                    </p>
                )}
                {location && <p className="wpc-cta-band__location">{location}</p>}
            </div>
            {actions && <div className="wpc-cta-band__actions">{actions}</div>}
        </Card>
    );
};
