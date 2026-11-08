import {
    maxWidthClasses,
    elementClasses,
    borderRadiusClasses,
    surfaceClasses,
} from '../../utils/propClasses';
import './styles.scss';

type maxWidthKeys = keyof typeof maxWidthClasses;
type elementKeys = keyof typeof elementClasses;
type borderRadiusKeys = keyof typeof borderRadiusClasses;
type colorKeys = keyof typeof surfaceClasses;

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    as?: elementKeys;
    maxWidth?: maxWidthKeys;
    contentWidth?: maxWidthKeys;
    color?: colorKeys;
    borderRadius?: borderRadiusKeys;
    // Rules in the colour's border colour. Needs `color`; a full-width band never gets side borders.
    border?: 'none' | 'top' | 'bottom' | 'both' | 'all';
    // A rule down the content's start edge, with the content inset beside it (the "New here?" and
    // FAQ sections). A divided GridGroup inside lines its first column up with the rule.
    hasRule?: boolean;
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
    hasRule = false,
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
        hasRule && 'wpc-container--ruled',
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
