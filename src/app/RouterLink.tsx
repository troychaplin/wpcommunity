import type { ComponentProps } from 'react';
import { Link } from 'react-router';

// Given to LinkProvider so component links to internal paths use React Router's client-side
// navigation, prefetching on hover or focus. External and hash-only links stay plain anchors.
export function RouterLink({ href = '', ...rest }: ComponentProps<'a'>) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');

    if (!isInternal) {
        // eslint-disable-next-line jsx-a11y/anchor-has-content -- children flows through {...rest}
        return <a href={href} {...rest} />;
    }

    return <Link to={href} prefetch="intent" {...rest} />;
}
