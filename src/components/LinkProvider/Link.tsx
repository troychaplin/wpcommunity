'use client';

import type { ComponentProps } from 'react';
import { useLinkContext } from './useLinkContext';

// A static component for component code to render, like next/link or React Router's Link. It
// renders whatever the nearest LinkProvider supplies, or a plain <a> without one.
export const Link = (props: ComponentProps<'a'>) => {
    const Component = useLinkContext();

    // The component comes from context, a stable reference, not one created in this render
    // eslint-disable-next-line react-hooks/static-components
    return <Component {...props} />;
};
