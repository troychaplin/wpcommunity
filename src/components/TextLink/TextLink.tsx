import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { Icon } from '../Icon';
import './styles.scss';

export interface TextLinkProps extends Omit<ComponentPropsWithoutRef<typeof Link>, 'href'> {
    href: string;
    children: React.ReactNode;
    hasArrow?: boolean;
    font?: 'sans' | 'mono';
    size?: 'small' | 'medium';
}

export const TextLink = ({
    href,
    children,
    hasArrow = false,
    font = 'sans',
    size = 'medium',
    className,
    ...rest
}: TextLinkProps) => {
    const classes = ['wpc-text-link', `wpc-text-link--${font}`, `wpc-text-link--${size}`, className]
        .filter(Boolean)
        .join(' ');

    return (
        <Link href={href} className={classes} {...rest}>
            {children}
            {hasArrow && <Icon name="arrow-right" className="wpc-text-link__arrow" />}
        </Link>
    );
};
