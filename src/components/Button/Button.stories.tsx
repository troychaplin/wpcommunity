import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '../Container';
import { Button } from './Button';

const meta = {
    title: 'Components/Elements/Button',
    component: Button,
    args: { text: 'Find Local Meetups' },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};

export const Secondary: Story = {
    args: { text: 'Join Canadian Slack', color: 'secondary' },
};

// The outline variant for dark sections, as in the group page's event band
export const Inverse: Story = {
    args: { text: 'Propose a Talk', color: 'inverse' },
    decorators: [
        (Story) => (
            <Container color="inverse" maxWidth="alignfull" contentWidth="alignwide">
                <Story />
            </Container>
        ),
    ],
};

export const WithIcon: Story = {
    args: { icon: 'map-pin', isLarge: true },
};

export const Small: Story = {
    args: { text: 'Small', isSmall: true },
};

export const FullWidth: Story = {
    args: { text: 'Full width', isFull: true },
};

export const Disabled: Story = {
    args: { text: 'Disabled', disabled: true },
};

// With `href` it renders a link styled as a button
export const AsLink: Story = {
    args: { text: 'Read the guide', color: 'secondary', href: '#story' },
};
