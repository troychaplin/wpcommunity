import {
    maxWidthClasses,
    elementClasses,
    borderRadiusClasses,
    backgroundColorClasses,
} from '../../utils/propClasses';
import './styles.scss';

type maxWidthKeys = keyof typeof maxWidthClasses;
type elementKeys = keyof typeof elementClasses;
type borderRadiusKeys = keyof typeof borderRadiusClasses;
type colorKeys = keyof typeof backgroundColorClasses;

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    as?: elementKeys;
    maxWidth?: maxWidthKeys;
    contentWidth?: maxWidthKeys;
    color?: colorKeys;
    borderRadius?: borderRadiusKeys;
    // Rules in the colour's border colour. Needs `color`; a full-width band never gets side borders.
    border?: 'none' | 'top' | 'bottom' | 'both' | 'all';
}

export const Container = ({
    children,
    as = 'div',
    maxWidth = 'aligncontent',
    contentWidth = 'aligncontent',
    color,
    className,
    borderRadius = 'md',
    border = 'none',
    ...rest
}: ContainerProps) => {
    const ContainerWrapper = as;

    const rootClasses = [
        'wpc-layout wpc-container',
        'is-layout-constrained',
        maxWidth,
        color && `wpc-container--no-gap wpc-container--${color}`,
        color && border !== 'none' && `wpc-container--border-${border}`,
        borderRadius && `wpc-container--radius-${borderRadius}`,
        className,
    ]
        .filter(Boolean)
        .join(' ');

    const contentClasses = ['has-global-padding', contentWidth, color && 'has-root-padding']
        .filter(Boolean)
        .join(' ');

    return (
        <ContainerWrapper className={rootClasses} {...rest}>
            <div className={contentClasses}>{children}</div>
        </ContainerWrapper>
    );
};
