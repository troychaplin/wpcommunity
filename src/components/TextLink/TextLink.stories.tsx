import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextLink } from './TextLink';

const meta = {
    title: 'Components/Elements/Text Link',
    component: TextLink,
    args: { href: '#groups', children: 'View group details' },
} satisfies Meta<typeof TextLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithArrow: Story = {
    args: { children: 'Visit Group Page', size: 'small', hasArrow: true },
};

// Channel names on the group page
export const Mono: Story = {
    args: { children: '#wp-toronto', font: 'mono', size: 'small' },
};
