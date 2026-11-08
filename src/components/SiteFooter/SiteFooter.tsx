import React from 'react';
import { Link } from '../LinkProvider';

import './styles.scss';

export interface SiteFooterNavItem {
    href: string;
    label: string;
}

export interface SiteFooterProps extends React.HTMLAttributes<HTMLElement> {
    name: string;
    nameHref?: string;
    description?: React.ReactNode;
    navItems?: SiteFooterNavItem[];
    navLabel?: string;
    children?: React.ReactNode;
    legal?: React.ReactNode;
    meta?: React.ReactNode;
    className?: string;
}

export const SiteFooter = ({
    name,
    nameHref,
    description,
    navItems,
    navLabel = 'Footer',
    children,
    legal,
    meta,
    className,
    ...rest
}: SiteFooterProps) => {
    const rootClasses = ['wpc-site-footer', className].filter(Boolean).join(' ');

    return (
        <footer className={rootClasses} {...rest}>
            <div className="wpc-site-footer__inner">
                <div className="wpc-site-footer__brand">
                    <p className="wpc-site-footer__name">
                        {nameHref ? <Link href={nameHref}>{name}</Link> : name}
                    </p>
                    {description && <p className="wpc-site-footer__description">{description}</p>}
                </div>
                {navItems && navItems.length > 0 && (
                    <nav className="wpc-site-footer__nav" aria-label={navLabel}>
                        <ul>
                            {navItems.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
                {children && <div className="wpc-site-footer__extra">{children}</div>}
            </div>
            {(legal || meta) && (
                <div className="wpc-site-footer__bottom">
                    {legal && <p className="wpc-site-footer__legal">{legal}</p>}
                    {meta && <p className="wpc-site-footer__meta">{meta}</p>}
                </div>
            )}
        </footer>
    );
};
