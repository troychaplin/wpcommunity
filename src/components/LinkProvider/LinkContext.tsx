'use client';

import { createContext } from 'react';
import type { ComponentProps, ComponentType } from 'react';

export type LinkComponent = ComponentType<ComponentProps<'a'>>;

// Without a provider, links render as plain anchors
// eslint-disable-next-line jsx-a11y/anchor-has-content -- children flows through {...props}
const DefaultLink: LinkComponent = (props) => <a {...props} />;

export const LinkContext = createContext<LinkComponent>(DefaultLink);
