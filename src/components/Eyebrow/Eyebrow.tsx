import './styles.scss';

export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: 'p' | 'span' | 'div' | 'time';
    tone?: 'muted' | 'accent';
    dateTime?: string;
}

export const Eyebrow = ({
    children,
    as = 'p',
    tone = 'muted',
    dateTime,
    className,
    ...rest
}: EyebrowProps) => {
    const classes = ['wpc-eyebrow', `wpc-eyebrow--${tone}`, className].filter(Boolean).join(' ');

    if (as === 'time') {
        return (
            <time className={classes} dateTime={dateTime} {...rest}>
                {children}
            </time>
        );
    }

    const Tag = as;

    return (
        <Tag className={classes} {...rest}>
            {children}
        </Tag>
    );
};
