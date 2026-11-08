import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridGroup } from '../GridGroup';
import { Card } from './Card';

const meta = {
    title: 'Components/Cards/Card',
    component: Card,
    args: {
        children: (
            <>
                <h3>Card title</h3>
                <p>
                    Card text with an <a href="#cards">inline link</a>.
                </p>
            </>
        ),
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Every surface in the shared set, each with its paired border
const surfaces = [
    { backgroundColor: 'white', label: 'White, with shadow', shadow: true },
    { backgroundColor: 'stone', label: 'Stone', shadow: false },
    { backgroundColor: 'sage', label: 'Sage', shadow: false },
    { backgroundColor: 'blush', label: 'Blush', shadow: false },
    { backgroundColor: 'crimson', label: 'Crimson', shadow: false },
    { backgroundColor: 'forest', label: 'Forest', shadow: false },
] as const;

export const Surfaces: Story = {
    render: (args) => (
        <GridGroup as="ul" columns={3}>
            {surfaces.map(({ backgroundColor, label, shadow }) => (
                <Card key={label} {...args} as="li" backgroundColor={backgroundColor} shadow={shadow}>
                    <h3>{label}</h3>
                    <p>
                        Card text with an <a href="#cards">inline link</a>.
                    </p>
                </Card>
            ))}
        </GridGroup>
    ),
};

// The whole card follows the link
export const Linked: Story = {
    args: {
        href: '#cards',
        shadow: true,
        children: (
            <>
                <h3>Linked card</h3>
                <p>The whole card follows the link.</p>
            </>
        ),
    },
};

// Like the stats panel on the group page
export const BorderlessTint: Story = {
    args: { backgroundColor: 'sage', border: false, borderRadius: 'md' },
};
