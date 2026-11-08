'use client';

import type { ReactNode } from 'react';
import { LinkContext } from './LinkContext';
import type { LinkComponent } from './LinkContext';

export interface LinkProviderProps {
    component: LinkComponent;
    children: ReactNode;
}

// Lets the app route component links through its own router (React Router's Link) while the
// components themselves stay router-free, so they also work in Storybook and c2b
export const LinkProvider = ({ component, children }: LinkProviderProps) => (
    <LinkContext.Provider value={component}>{children}</LinkContext.Provider>
);
