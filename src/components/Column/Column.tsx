import React from 'react';
import { ColumnContent } from './ColumnContent';
import { gridColumnClasses } from '../../utils/propClasses';
import './styles.scss';

type gridColumnKeys = keyof typeof gridColumnClasses;

export interface ColumnProps {
    children: React.ReactNode;
    cols?: gridColumnKeys;
    // Omit to fill the parent (a Container sets the width). Set it only for a Column placed
    // straight in Main, outside any Container.
    maxWidth?: 'aligncontent' | 'alignwide' | 'alignfull';
}

export const ColumnWrapper = ({ children, cols = '2', maxWidth }: ColumnProps) => {
    const rootClasses = [
        `wpc-layout wpc-column wpc-column--${gridColumnClasses[cols]}`,
        maxWidth,
    ]
        .filter(Boolean)
        .join(' ');

    return <div className={rootClasses}>{children}</div>;
};

export const Column = Object.assign(ColumnWrapper, {
    Content: ColumnContent,
});

ColumnWrapper.displayName = 'Column';
