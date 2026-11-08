import { Avatar } from '../Avatar';
import { Card } from '../Card';
import { Eyebrow } from '../Eyebrow';
import { Heading } from '../Heading';
import './styles.scss';

export interface PersonCardProps {
    name: string;
    role: string;
    handle?: string;
    avatarSrc?: string;
    bio?: React.ReactNode;
    label?: string;
    actions?: React.ReactNode;
    variant?: 'featured' | 'compact';
    headingLevel?: 2 | 3 | 4;
    className?: string;
}

export const PersonCard = ({
    name,
    role,
    handle,
    avatarSrc,
    bio,
    label,
    actions,
    variant = 'featured',
    headingLevel = 3,
    className,
}: PersonCardProps) => {
    const classes = ['wpc-person-card', `wpc-person-card--${variant}`, className]
        .filter(Boolean)
        .join(' ');
    const titleTag = `h${headingLevel}` as const;

    const identity = (
        <div className="wpc-person-card__identity">
            <Heading as={titleTag} size="x-large">
                {name}
            </Heading>
            <p className="wpc-person-card__role">{role}</p>
            {handle && <Eyebrow>{handle}</Eyebrow>}
        </div>
    );

    if (variant === 'compact') {
        return (
            <Card
                as="article"
                backgroundColor="stone"
                paddingInline="small"
                paddingBlock="small"
                className={classes}
            >
                <Avatar name={name} src={avatarSrc} size="medium" />
                {identity}
            </Card>
        );
    }

    return (
        <Card as="article" shadow paddingInline="medium" paddingBlock="medium" className={classes}>
            {label && <Eyebrow className="wpc-person-card__label">{label}</Eyebrow>}
            <div className="wpc-person-card__header">
                <Avatar name={name} src={avatarSrc} size="large" />
                {identity}
            </div>
            {bio && <div className="wpc-person-card__bio">{bio}</div>}
            {actions && <div className="wpc-person-card__actions">{actions}</div>}
        </Card>
    );
};
