import Link from 'next/link';
import type { ComponentPropsWithoutRef } from 'react';
import { borderRadiusClasses } from '../../utils/propClasses';
import { Icon } from '../Icon';
import type { IconName } from '../Icon';
import './styles.scss';

type borderRadiusKeys = keyof typeof borderRadiusClasses;
type colorKeys = 'primary' | 'secondary' | 'inverse';

interface ButtonBaseProps {
    text: string;
    rounded?: borderRadiusKeys;
    color?: colorKeys;
    icon?: IconName;
    isSmall?: boolean;
    isLarge?: boolean;
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
    icon,
    isSmall = false,
    isLarge = false,
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
        isLarge && 'wpc-button--large',
        isFull && 'wpc-button--full',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (rest.href !== undefined) {
        return (
            <Link className={classes} {...rest}>
                {icon && <Icon name={icon} />}
                {text}
            </Link>
        );
    }

    return (
        <button type={type} className={classes} disabled={disabled} {...rest}>
            {icon && <Icon name={icon} />}
            {text}
        </button>
    );
};
