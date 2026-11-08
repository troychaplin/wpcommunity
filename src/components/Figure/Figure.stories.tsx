import type { Meta, StoryObj } from '@storybook/react-vite';
import { Figure } from './Figure';

const meta = {
    title: 'Content/Figure',
    component: Figure,
    args: {
        caption: 'A figure with a caption',
        size: 'md',
        children: <img src="globe.svg" alt="Globe illustration" width={480} height={480} />,
    },
} satisfies Meta<typeof Figure>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
    args: { size: 'sm' },
};

export const WithoutCaption: Story = {
    args: { caption: undefined },
};
