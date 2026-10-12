import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { borderRadiusClasses } from '../../utils/propClasses';
import './styles.scss';

type borderRadiusKeys = keyof typeof borderRadiusClasses;
type colorKeys = 'primary' | 'secondary' | 'inverse';

interface ButtonBaseProps {
    text: string;
    rounded?: borderRadiusKeys;
    color?: colorKeys;
    isSmall?: boolean;
    isFull?: boolean;
}

type ButtonElementProps = ButtonBaseProps &
    Omit<ComponentPropsWithoutRef<'button'>, keyof ButtonBaseProps> & {
        href?: never;
    };

type ButtonLinkProps = ButtonBaseProps &
    Omit<ComponentPropsWithoutRef<typeof Link>, keyof ButtonBaseProps | 'type'> & {
        href: string;
        type?: never;
        disabled?: never;
    };

export type ButtonProps = ButtonElementProps | ButtonLinkProps;

export const Button = ({
    text = 'Button',
    color = 'primary',
    rounded = 'sm',
    type = 'button',
    isSmall = false,
    isFull = false,
    disabled = false,
    className,
    ...rest
}: ButtonProps) => {
    const classes = [
        'wpc-button',
        disabled ? 'wpc-button--disabled' : `wpc-button--${color}`,
        rounded && `wpc-button--radius-${rounded}`,
        isSmall && 'wpc-button--small',
        isFull && 'wpc-button--full',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (rest.href !== undefined) {
        return (
            <Link className={classes} {...rest}>
                {text}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} disabled={disabled} {...rest}>
            {text}
        </button>
    );
};
