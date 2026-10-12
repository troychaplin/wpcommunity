import React from 'react';
import Link from 'next/link';

import { FlexGroup } from '../FlexGroup/FlexGroup';
import { splitTitle } from '../../utils/splitTitle';

import './styles.scss';

export interface SiteHeaderNavItem {
    href: string;
    label: string;
}

export interface SiteHeaderProps {
    children?: React.ReactNode;
    siteTitle?: string;
    siteTitleAccent?: string;
    navItems?: SiteHeaderNavItem[];
    className?: string;
}

export const SiteHeader = ({
    className,
    children,
    siteTitle = 'WP Canada',
    siteTitleAccent,
    navItems,
}: SiteHeaderProps) => {
    const rootClasses = ['wpc-site-header', className].filter(Boolean).join(' ');
    const [titleStart, titleAccent, titleEnd] = splitTitle(siteTitle, siteTitleAccent);

    return (
        <header className={rootClasses}>
            <FlexGroup gap="small" maxWidth="alignwide" justify="space-between" align="center">
                <div className="wpc-site-header__branding">
                    <p>
                        <Link href="/" rel="home">
                            {titleStart}
                            {titleAccent && (
                                <span className="wpc-site-header__title-accent">{titleAccent}</span>
                            )}
                            {titleEnd}
                        </Link>
                    </p>
                </div>
                {navItems && navItems.length > 0 && (
                    <nav className="wpc-site-header__nav" aria-label="Primary">
                        <ul>
                            {navItems.map(({ href, label }) => (
                                <li key={href}>
                                    <Link href={href}>{label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}
                {children && <div className="wpc-site-header__actions">{children}</div>}
            </FlexGroup>
        </header>
    );
};
