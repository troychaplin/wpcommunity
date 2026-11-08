import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pill } from './Pill';

const meta = {
    title: 'Components/Elements/Pill',
    component: Pill,
    args: { children: 'Event' },
} satisfies Meta<typeof Pill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Tag: Story = {};

export const Region: Story = {
    args: { children: 'Ontario / Great Lakes Region', variant: 'region' },
};

export const Status: Story = {
    args: { children: 'Active Chapter', variant: 'status' },
};
