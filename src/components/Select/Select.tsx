import { useId } from 'react';
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
    error?: string;
}

export const Select = ({
    label,
    options,
    hideLabel = false,
    placeholder,
    error,
    className,
    ...rest
}: SelectProps) => {
    const errorId = useId();
    const classes = ['wpc-select', className].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            <label className="wpc-select__field">
                <span className={hideLabel ? 'wpc-select__label sr-only' : 'wpc-select__label'}>
                    {label}
                </span>
                <span className="wpc-select__control">
                    <select
                        className="wpc-select__input"
                        aria-invalid={error ? true : undefined}
                        aria-describedby={error ? errorId : undefined}
                        {...rest}
                    >
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
            {error && (
                <span id={errorId} className="wpc-select__error">
                    {error}
                </span>
            )}
        </div>
    );
};
