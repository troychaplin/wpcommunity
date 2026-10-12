import { Eyebrow } from '../Eyebrow';
import { Heading } from '../Heading';
import { TextLink } from '../TextLink';
import './styles.scss';

export interface GroupCardProps extends React.HTMLAttributes<HTMLElement> {
    region: string;
    name: string;
    description: string;
    members: string | number;
    cadence: string;
    href: string;
    headingLevel?: 2 | 3 | 4;
}

export const GroupCard = ({
    region,
    name,
    description,
    members,
    cadence,
    href,
    headingLevel = 3,
    className,
    ...rest
}: GroupCardProps) => {
    const classes = ['wpc-group-card', className].filter(Boolean).join(' ');
    const titleTag = `h${headingLevel}` as const;
    const memberCount = typeof members === 'number' ? members.toLocaleString('en-CA') : members;

    return (
        <article className={classes} {...rest}>
            <Eyebrow tone="accent">{region}</Eyebrow>
            <Heading as={titleTag} size="x-large">
                {name}
            </Heading>
            <p className="wpc-group-card__description">{description}</p>
            <p className="wpc-group-card__meta">
                <span>
                    <strong className="wpc-group-card__value">{memberCount}</strong> members
                </span>
                <span>
                    <strong className="wpc-group-card__value">{cadence}</strong> meetups
                </span>
            </p>
            <TextLink
                href={href}
                className="wpc-group-card__link"
                aria-label={`View group details, ${name}`}
            >
                View group details
            </TextLink>
        </article>
    );
};
