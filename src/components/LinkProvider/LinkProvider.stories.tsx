import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ComponentProps } from 'react';
import { Button } from '../Button';
import { FlexGroup } from '../FlexGroup';
import { TextLink } from '../TextLink';
import { LinkProvider } from './LinkProvider';

const meta = {
    title: 'Components/Utilities/Link Provider',
    component: LinkProvider,
    parameters: {
        docs: {
            description: {
                component:
                    "Supplies the router's link component to every component that renders a link (Button, Card, TextLink and the rest). Without a provider they render a plain `<a>`. The site wraps the app in it with React Router's `Link` in `src/app/root.tsx`.",
            },
        },
    },
} satisfies Meta<typeof LinkProvider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Stands in for React Router's Link. The dashed outline shows which links went through it.
const MockRouterLink = ({ children, style, ...rest }: ComponentProps<'a'>) => (
    <a
        {...rest}
        data-router-link=""
        style={{ ...style, outline: '2px dashed var(--wpc--color-primary)', outlineOffset: '4px' }}
    >
        {children}
    </a>
);

const Links = () => (
    <FlexGroup gap="large" align="center">
        <Button text="Find Local Meetups" href="#groups" />
        <TextLink href="#groups" hasArrow>
            View all groups
        </TextLink>
    </FlexGroup>
);

export const PlainAnchors: Story = {
    name: 'Without a provider (plain anchors)',
    args: { component: MockRouterLink, children: null },
    render: () => <Links />,
};

export const WithRouterLink: Story = {
    name: 'With a router link',
    args: { component: MockRouterLink, children: null },
    render: (args) => (
        <LinkProvider component={args.component}>
            <Links />
        </LinkProvider>
    ),
};
