import type { Meta, StoryObj } from '@storybook/react-vite';
import { SkipLink } from './SkipLink';

const meta = {
    title: 'Foundations/SkipLink',
    component: SkipLink,
    parameters: {
        docs: {
            description: {
                component: 'Hidden off-screen until it receives focus. Click into the canvas and press Tab to reveal it.',
            },
        },
    },
} satisfies Meta<typeof SkipLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const French: Story = {
    args: { children: 'Passer au contenu' },
};
