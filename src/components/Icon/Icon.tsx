import type { LucideProps } from 'lucide-react';
import { icons } from './icons';
import type { IconName } from './icons';
import './styles.scss';

type IconSize = 'inherit' | 'small' | 'medium' | 'large' | 'x-large' | '2x-large' | 'heading-small';

export interface IconProps extends Omit<LucideProps, 'name' | 'size' | 'ref'> {
    name: IconName;
    size?: IconSize;
    strokeWidth?: number;
    label?: string;
}

export const Icon = ({
    name,
    size = 'inherit',
    strokeWidth = 1.75,
    label,
    className,
    ...rest
}: IconProps) => {
    const LucideIcon = icons[name];
    const classes = ['wpc-icon', size !== 'inherit' && `wpc-icon--${size}`, className]
        .filter(Boolean)
        .join(' ');

    // Decorative unless labelled: the text beside an icon usually carries its meaning.
    const a11yProps = label
        ? { role: 'img', 'aria-label': label }
        : { 'aria-hidden': true, focusable: false };

    return (
        <LucideIcon
            className={classes}
            size="1em"
            strokeWidth={strokeWidth}
            {...a11yProps}
            {...rest}
        />
    );
};
