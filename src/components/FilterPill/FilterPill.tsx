import type { ComponentPropsWithoutRef } from 'react';
import './styles.scss';

export interface FilterPillProps extends Omit<ComponentPropsWithoutRef<'button'>, 'type'> {
    children: React.ReactNode;
    pressed?: boolean;
}

export const FilterPill = ({ children, pressed = false, className, ...rest }: FilterPillProps) => {
    const classes = ['wpc-filter-pill', pressed && 'wpc-filter-pill--pressed', className]
        .filter(Boolean)
        .join(' ');

    return (
        <button type="button" className={classes} aria-pressed={pressed} {...rest}>
            {children}
        </button>
    );
};
