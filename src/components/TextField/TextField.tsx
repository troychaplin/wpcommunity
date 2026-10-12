import type { ComponentPropsWithoutRef } from 'react';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';
import './styles.scss';

export interface TextFieldProps extends Omit<ComponentPropsWithoutRef<'input'>, 'type'> {
    label: string;
    hideLabel?: boolean;
    icon?: IconName;
    type?: 'text' | 'email' | 'tel' | 'url' | 'search';
}

// The label wraps the input, which associates the two without ids
export const TextField = ({
    label,
    hideLabel = false,
    icon,
    type = 'text',
    className,
    ...rest
}: TextFieldProps) => {
    const classes = ['wpc-text-field', icon && 'wpc-text-field--has-icon', className]
        .filter(Boolean)
        .join(' ');

    return (
        <label className={classes}>
            <span className={hideLabel ? 'wpc-text-field__label sr-only' : 'wpc-text-field__label'}>
                {label}
            </span>
            <span className="wpc-text-field__control">
                {icon && <Icon name={icon} className="wpc-text-field__icon" />}
                <input className="wpc-text-field__input" type={type} {...rest} />
            </span>
        </label>
    );
};
