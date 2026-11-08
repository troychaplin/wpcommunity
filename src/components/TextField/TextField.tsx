import { useId } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';
import './styles.scss';

export interface TextFieldProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
    label: string;
    hideLabel?: boolean;
    icon?: IconName;
    type?: 'text' | 'email' | 'tel' | 'url' | 'search';
    error?: string;
}

// The label wraps the input, which associates the two without ids. An error sits outside the
// label, linked by aria-describedby, so it isn't read as part of the field's name.
export const TextField = ({
    label,
    hideLabel = false,
    icon,
    type = 'text',
    error,
    className,
    ...rest
}: TextFieldProps) => {
    const errorId = useId();
    const classes = ['wpc-text-field', icon && 'wpc-text-field--has-icon', className]
        .filter(Boolean)
        .join(' ');

    return (
        <div className={classes}>
            <label className="wpc-text-field__field">
                <span className={hideLabel ? 'wpc-text-field__label sr-only' : 'wpc-text-field__label'}>
                    {label}
                </span>
                <span className="wpc-text-field__control">
                    {icon && <Icon name={icon} className="wpc-text-field__icon" />}
                    <input
                        className="wpc-text-field__input"
                        type={type}
                        aria-invalid={error ? true : undefined}
                        aria-describedby={error ? errorId : undefined}
                        {...rest}
                    />
                </span>
            </label>
            {error && (
                <span id={errorId} className="wpc-text-field__error">
                    {error}
                </span>
            )}
        </div>
    );
};
