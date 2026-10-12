import type { ComponentPropsWithoutRef } from 'react';
import './styles.scss';

export interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
    label: string;
    hideLabel?: boolean;
}

export const TextArea = ({ label, hideLabel = false, rows = 4, className, ...rest }: TextAreaProps) => {
    const classes = ['wpc-text-area', className].filter(Boolean).join(' ');

    return (
        <label className={classes}>
            <span className={hideLabel ? 'wpc-text-area__label sr-only' : 'wpc-text-area__label'}>
                {label}
            </span>
            <textarea className="wpc-text-area__input" rows={rows} {...rest} />
        </label>
    );
};
