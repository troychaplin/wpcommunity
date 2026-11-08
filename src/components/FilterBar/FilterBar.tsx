'use client';

import { Eyebrow } from '../Eyebrow';
import { FilterPill } from '../FilterPill';
import './styles.scss';

export interface FilterBarOption {
    value: string;
    label: string;
}

export interface FilterBarProps {
    label: string;
    options: FilterBarOption[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
}

// Controlled: the parent owns `value` and filters its own results
export const FilterBar = ({ label, options, value, onChange, className }: FilterBarProps) => {
    const classes = ['wpc-filter-bar', className].filter(Boolean).join(' ');

    return (
        <div className={classes} role="group" aria-label={label}>
            <Eyebrow as="span" aria-hidden="true" className="wpc-filter-bar__label">
                {label}
            </Eyebrow>
            {options.map((option) => (
                <FilterPill
                    key={option.value}
                    pressed={option.value === value}
                    onClick={() => onChange(option.value)}
                >
                    {option.label}
                </FilterPill>
            ))}
        </div>
    );
};
