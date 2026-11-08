import React from 'react';

import { FlexGroup } from '../FlexGroup/FlexGroup';
import { Link } from '../LinkProvider';
import { splitTitle } from '../../utils/splitTitle';
import { SiteHeaderMenu } from './SiteHeaderMenu';

import './styles.scss';

export interface SiteHeaderNavItem {
    href: string;
    label: string;
}

export interface SiteHeaderProps {
    children?: React.ReactNode;
    siteTitle?: string;
    siteTitleAccent?: string;
    homeHref?: string;
    // The current path. The mobile menu closes when it changes, so pass the router's pathname.
    currentPath?: string;
    navItems?: SiteHeaderNavItem[];
    navLabel?: string;
    menuLabel?: string;
    closeLabel?: string;
    className?: string;
}

export const SiteHeader = ({
    className,
    children,
    siteTitle = 'WP Canada',
    siteTitleAccent,
    homeHref = '/',
    currentPath = '',
    navItems,
    navLabel = 'Primary',
    menuLabel = 'Menu',
    closeLabel = 'Close',
}: SiteHeaderProps) => {
    const rootClasses = ['wpc-site-header', className].filter(Boolean).join(' ');
    const [titleStart, titleAccent, titleEnd] = splitTitle(siteTitle, siteTitleAccent);
    const hasNav = navItems !== undefined && navItems.length > 0;

    return (
        <header className={rootClasses}>
            <FlexGroup gap="small" maxWidth="alignwide" justify="space-between" align="center">
                <div className="wpc-site-header__branding">
                    <p>
                        <Link href={homeHref} rel="home">
                            {titleStart}
                            {titleAccent && (
                                <span className="wpc-site-header__title-accent">{titleAccent}</span>
                            )}
                            {titleEnd}
                        </Link>
                    </p>
                </div>
                {(hasNav || children) && (
                    <SiteHeaderMenu menuLabel={menuLabel} closeLabel={closeLabel} currentPath={currentPath}>
                        {hasNav && (
                            <nav className="wpc-site-header__nav" aria-label={navLabel}>
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
                    </SiteHeaderMenu>
                )}
            </FlexGroup>
        </header>
    );
};
