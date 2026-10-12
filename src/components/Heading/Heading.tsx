import { splitTitle } from '../../utils/splitTitle';
import './styles.scss';

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type HeadingSize =
    | 'display'
    | 'heading-large'
    | 'heading-medium'
    | 'heading-small'
    | '2x-large'
    | 'x-large'
    | 'large';

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: React.ReactNode;
    as?: HeadingElement;
    size?: HeadingSize;
    accent?: string;
}

export const Heading = ({ children, as = 'h2', size, accent, className, ...rest }: HeadingProps) => {
    const Tag = as;
    const classes = ['wpc-heading', size && `wpc-heading--${size}`, className]
        .filter(Boolean)
        .join(' ');

    if (typeof children !== 'string' || !accent) {
        return (
            <Tag className={classes} {...rest}>
                {children}
            </Tag>
        );
    }

    const [start, accentText, end] = splitTitle(children, accent);

    return (
        <Tag className={classes} {...rest}>
            {start}
            {accentText && <span className="wpc-heading__accent">{accentText}</span>}
            {end}
        </Tag>
    );
};
