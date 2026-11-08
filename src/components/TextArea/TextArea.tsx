import { useId } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import './styles.scss';

export interface TextAreaProps extends ComponentPropsWithoutRef<'textarea'> {
    label: string;
    hideLabel?: boolean;
    error?: string;
}

export const TextArea = ({
    label,
    hideLabel = false,
    rows = 4,
    error,
    className,
    ...rest
}: TextAreaProps) => {
    const errorId = useId();
    const classes = ['wpc-text-area', className].filter(Boolean).join(' ');

    return (
        <div className={classes}>
            <label className="wpc-text-area__field">
                <span className={hideLabel ? 'wpc-text-area__label sr-only' : 'wpc-text-area__label'}>
                    {label}
                </span>
                <textarea
                    className="wpc-text-area__input"
                    rows={rows}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? errorId : undefined}
                    {...rest}
                />
            </label>
            {error && (
                <span id={errorId} className="wpc-text-area__error">
                    {error}
                </span>
            )}
        </div>
    );
};
