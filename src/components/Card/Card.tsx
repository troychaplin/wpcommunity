import Link from 'next/link';
import {
    backgroundColorClasses,
    borderRadiusClasses,
    spacingClasses,
} from '../../utils/propClasses';
import './styles.scss';

type surfaceKeys = keyof typeof backgroundColorClasses;
type borderRadiusKeys = keyof typeof borderRadiusClasses;
type spacingKeys = keyof typeof spacingClasses;

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: 'div' | 'article' | 'li';
    backgroundColor?: surfaceKeys;
    border?: boolean;
    shadow?: boolean;
    borderRadius?: borderRadiusKeys;
    paddingInline?: spacingKeys;
    paddingBlock?: spacingKeys;
    href?: string;
    linkProps?: Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href' | 'className' | 'children'>;
}

export const Card = ({
    children,
    as = 'div',
    backgroundColor = 'white',
    border = true,
    shadow = false,
    borderRadius = 'sm',
    paddingInline = 'large',
    paddingBlock = 'large',
    href,
    linkProps,
    className,
    ...rest
}: CardProps) => {
    const CardWrapper = as;

    const rootClasses = [
        'wpc-card',
        `wpc-card--bg-${backgroundColorClasses[backgroundColor]}`,
        border && 'wpc-card--border',
        shadow && 'wpc-card--shadow',
        `wpc-card--radius-${borderRadiusClasses[borderRadius]}`,
        `wpc-card--padding-inline-${spacingClasses[paddingInline]}`,
        `wpc-card--padding-block-${spacingClasses[paddingBlock]}`,
        href && 'wpc-card--linked',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (href) {
        return (
            <CardWrapper className={rootClasses} {...rest}>
                <Link className="wpc-card__link" href={href} {...linkProps}>
                    {children}
                </Link>
            </CardWrapper>
        );
    }

    return (
        <CardWrapper className={rootClasses} {...rest}>
            {children}
        </CardWrapper>
    );
};
