import React from 'react';

import { Eyebrow } from '../Eyebrow';

import './styles.scss';

export interface SectionHeaderProps extends Omit<
    React.HTMLAttributes<HTMLElement>,
    'title' | 'prefix'
> {
    className?: string;
    prefix?: string;
    title?: string;
    level?: 2 | 3 | 4;
    meta?: React.ReactNode;
    description?: React.ReactNode;
    align?: 'start' | 'center';
    hasDivider?: boolean;
}

export const SectionHeader = ({
    className,
    prefix,
    title,
    level = 2,
    meta,
    description,
    align = 'start',
    hasDivider = false,
    ...rest
}: SectionHeaderProps) => {
    const rootClasses = [
        'wpc-section-header',
        `wpc-section-header--${align}`,
        hasDivider && 'wpc-section-header--divider',
        className,
    ]
        .filter(Boolean)
        .join(' ');
    const Heading = `h${level}` as const;

    return (
        <header className={rootClasses} {...rest}>
            <div className="wpc-section-header__main">
                {prefix && (
                    <Eyebrow tone="accent" className="wpc-section-header__prefix">
                        {prefix}
                    </Eyebrow>
                )}
                {title && <Heading className="wpc-section-header__title">{title}</Heading>}
            </div>
            {meta && <Eyebrow className="wpc-section-header__meta">{meta}</Eyebrow>}
            {description && <p className="wpc-section-header__description">{description}</p>}
        </header>
    );
};
