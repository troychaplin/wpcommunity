'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { Icon } from '../Icon';

export interface SiteHeaderMenuProps {
    children: React.ReactNode;
    menuLabel: string;
    closeLabel: string;
    currentPath: string;
}

// Below the tablet breakpoint the nav and actions collapse behind a Menu button. The menu
// records the path it was opened on, so navigating anywhere closes it with no effect to sync.
export const SiteHeaderMenu = ({ children, menuLabel, closeLabel, currentPath }: SiteHeaderMenuProps) => {
    const [openOn, setOpenOn] = useState<string | null>(null);
    const isOpen = openOn === currentPath;
    const panelId = useId();
    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!isOpen) {
            return undefined;
        }

        const closeOnEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpenOn(null);
                buttonRef.current?.focus();
            }
        };

        document.addEventListener('keydown', closeOnEscape);
        return () => document.removeEventListener('keydown', closeOnEscape);
    }, [isOpen]);

    const classes = ['wpc-site-header__menu', isOpen && 'wpc-site-header__menu--open']
        .filter(Boolean)
        .join(' ');

    return (
        <div className={classes}>
            <button
                ref={buttonRef}
                type="button"
                className="wpc-site-header__toggle"
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenOn(isOpen ? null : currentPath)}
            >
                <Icon name={isOpen ? 'x' : 'menu'} />
                {isOpen ? closeLabel : menuLabel}
            </button>
            <div id={panelId} className="wpc-site-header__panel">
                {children}
            </div>
        </div>
    );
};

SiteHeaderMenu.displayName = 'SiteHeader.Menu';
