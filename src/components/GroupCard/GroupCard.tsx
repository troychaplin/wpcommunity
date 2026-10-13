import { Eyebrow } from '../Eyebrow';
import { Heading } from '../Heading';
import { TextLink } from '../TextLink';
import './styles.scss';

// Renders a template such as '{cadence} meetups' with the value in bold, so the word order can
// follow the language ('Rencontres {cadence}').
const withValue = (template: string, key: string, value: React.ReactNode) => {
    const [before, after = ''] = template.split(`{${key}}`);

    return (
        <>
            {before}
            <strong className="wpc-group-card__value">{value}</strong>
            {after}
        </>
    );
};

export interface GroupCardProps extends React.HTMLAttributes<HTMLElement> {
    region: string;
    name: string;
    description: string;
    members: string | number;
    cadence: string;
    href: string;
    linkText?: string;
    membersFormat?: string;
    cadenceFormat?: string;
    locale?: string;
    headingLevel?: 2 | 3 | 4;
}

export const GroupCard = ({
    region,
    name,
    description,
    members,
    cadence,
    href,
    linkText = 'View group details',
    membersFormat = '{members} members',
    cadenceFormat = '{cadence} meetups',
    locale = 'en-CA',
    headingLevel = 3,
    className,
    ...rest
}: GroupCardProps) => {
    const classes = ['wpc-group-card', className].filter(Boolean).join(' ');
    const titleTag = `h${headingLevel}` as const;
    const memberCount = typeof members === 'number' ? members.toLocaleString(locale) : members;

    return (
        <article className={classes} {...rest}>
            <Eyebrow tone="accent">{region}</Eyebrow>
            <Heading as={titleTag} size="x-large">
                {name}
            </Heading>
            <p className="wpc-group-card__description">{description}</p>
            <p className="wpc-group-card__meta">
                <span>{withValue(membersFormat, 'members', memberCount)}</span>
                <span>{withValue(cadenceFormat, 'cadence', cadence)}</span>
            </p>
            <TextLink
                href={href}
                className="wpc-group-card__link"
                aria-label={`${linkText}, ${name}`}
            >
                {linkText}
            </TextLink>
        </article>
    );
};
