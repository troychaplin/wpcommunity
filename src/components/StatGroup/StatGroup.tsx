import { StatGroupItem } from './StatGroupItem';
import './styles.scss';

export interface StatGroupProps extends React.HTMLAttributes<HTMLDListElement> {
    children: React.ReactNode;
    variant?: 'serif' | 'mono';
}

export const StatGroupWrapper = ({
    children,
    variant = 'serif',
    className,
    ...rest
}: StatGroupProps) => {
    const classes = ['wpc-stat-group', `wpc-stat-group--${variant}`, className]
        .filter(Boolean)
        .join(' ');

    return (
        <dl className={classes} {...rest}>
            {children}
        </dl>
    );
};

export const StatGroup = Object.assign(StatGroupWrapper, {
    Item: StatGroupItem,
});

StatGroupWrapper.displayName = 'StatGroup';
