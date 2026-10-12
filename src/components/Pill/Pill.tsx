import './styles.scss';

export interface PillProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    variant?: 'tag' | 'region' | 'status';
    as?: 'span' | 'li';
}

export const Pill = ({ children, variant = 'tag', as = 'span', className, ...rest }: PillProps) => {
    const Tag = as;
    const classes = ['wpc-pill', `wpc-pill--${variant}`, className].filter(Boolean).join(' ');

    return (
        <Tag className={classes} {...rest}>
            {children}
        </Tag>
    );
};
