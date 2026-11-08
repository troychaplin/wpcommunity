import type { Meta, StoryObj } from '@storybook/react-vite';
import { Eyebrow } from './Eyebrow';

const meta = {
    title: 'Components/Elements/Eyebrow',
    component: Eyebrow,
    args: { children: 'primary group contact' },
} satisfies Meta<typeof Eyebrow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Muted: Story = {};

export const Accent: Story = {
    args: { children: 'Ontario', tone: 'accent' },
};

export const AsTime: Story = {
    args: { children: 'Sept 12', as: 'time', dateTime: '2026-09-12' },
};
