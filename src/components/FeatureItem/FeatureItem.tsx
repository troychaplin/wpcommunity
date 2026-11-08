import { Heading } from '../Heading';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';
import { TextLink } from '../TextLink';
import './styles.scss';

export interface FeatureItemProps extends React.HTMLAttributes<HTMLElement> {
    icon: IconName;
    title: string;
    children: React.ReactNode;
    href: string;
    linkText: string;
    headingLevel?: 2 | 3 | 4;
}

export const FeatureItem = ({
    icon,
    title,
    children,
    href,
    linkText,
    headingLevel = 3,
    className,
    ...rest
}: FeatureItemProps) => {
    const classes = ['wpc-feature-item', className].filter(Boolean).join(' ');
    const titleTag = `h${headingLevel}` as const;

    return (
        <div className={classes} {...rest}>
            <Icon name={icon} size="heading-small" className="wpc-feature-item__icon" />
            <Heading as={titleTag} size="2x-large">
                {title}
            </Heading>
            <div className="wpc-feature-item__text">{children}</div>
            <TextLink href={href} className="wpc-feature-item__link">
                {linkText}
            </TextLink>
        </div>
    );
};
