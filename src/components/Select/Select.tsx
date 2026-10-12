import type { ComponentPropsWithoutRef } from 'react';
import { Icon } from '../Icon';
import './styles.scss';

export interface SelectOption {
    value: string;
    label: string;
}

export interface SelectProps extends ComponentPropsWithoutRef<'select'> {
    label: string;
    options: SelectOption[];
    hideLabel?: boolean;
    placeholder?: string;
}

export const Select = ({
    label,
    options,
    hideLabel = false,
    placeholder,
    className,
    ...rest
}: SelectProps) => {
    const classes = ['wpc-select', className].filter(Boolean).join(' ');

    return (
        <label className={classes}>
            <span className={hideLabel ? 'wpc-select__label sr-only' : 'wpc-select__label'}>
                {label}
            </span>
            <span className="wpc-select__control">
                <select className="wpc-select__input" {...rest}>
                    {placeholder && <option value="">{placeholder}</option>}
                    {options.map(({ value, label: optionLabel }) => (
                        <option key={value} value={value}>
                            {optionLabel}
                        </option>
                    ))}
                </select>
                <Icon name="chevron-down" className="wpc-select__icon" />
            </span>
        </label>
    );
};
