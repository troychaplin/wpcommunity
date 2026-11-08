import { flexAlignClasses, maxWidthClasses, spacingClasses } from '../../utils/propClasses';
import './styles.scss';

type alignKeys = keyof typeof flexAlignClasses;
type spacingKeys = keyof typeof spacingClasses;
type maxWidthKeys = keyof typeof maxWidthClasses;

export interface GridGroupProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    as?: 'div' | 'section' | 'ul' | 'ol';
    columns?: 1 | 2 | 3 | 4;
    gap?: spacingKeys;
    rowGap?: spacingKeys;
    align?: alignKeys;
    maxWidth?: maxWidthKeys;
    // Lines between cells instead of a gap. `columns` rules between side-by-side cells (and between
    // stacked ones); `all` rules every row and column and closes with a bottom rule; `framed` rules
    // every row and column inside a frame, like a table.
    dividers?: 'none' | 'columns' | 'all' | 'framed';
    // Draws the lines in that surface's paired border (stone-200, sage-200, crimson-700,
    // forest-800). Unset, they follow the section's border role.
    dividerColor?: 'stone' | 'sage' | 'crimson' | 'forest';
    // Pads each divided cell so its content clears the lines. Turn it off to sit a Card flush
    // against them, with the Card's own padding insetting its content.
    cellPadding?: boolean;
}

export const GridGroup = ({
    children,
    as = 'div',
    columns = 3,
    gap = 'medium',
    rowGap,
    align,
    maxWidth,
    dividers = 'none',
    dividerColor,
    cellPadding = true,
    className,
    ...rest
}: GridGroupProps) => {
    const GridGroupWrapper = as;

    const rootClasses = [
        'wpc-layout wpc-grid-group',
        `wpc-grid-group--columns-${columns}`,
        `wpc-grid-group--gap-${spacingClasses[gap]}`,
        rowGap && `wpc-grid-group--row-gap-${spacingClasses[rowGap]}`,
        align && `wpc-grid-group--align-${flexAlignClasses[align]}`,
        maxWidth && maxWidthClasses[maxWidth],
        dividers !== 'none' && `wpc-grid-group--dividers wpc-grid-group--dividers-${dividers}`,
        dividers !== 'none' && dividerColor && `wpc-grid-group--divider-${dividerColor}`,
        dividers !== 'none' && cellPadding && 'wpc-grid-group--cell-padding',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    // list-style: none drops list semantics in Safari/VoiceOver, so restore them explicitly.
    const listRole = as === 'ul' || as === 'ol' ? 'list' : undefined;

    return (
        <GridGroupWrapper className={rootClasses} role={listRole} {...rest}>
            {children}
        </GridGroupWrapper>
    );
};
