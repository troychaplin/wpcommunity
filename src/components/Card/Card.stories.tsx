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

const surfaces = [
    { backgroundColor: 'white', label: 'White, with shadow', shadow: true },
    { backgroundColor: 'canvas', label: 'Canvas', shadow: false },
    { backgroundColor: 'tint', label: 'Tint', shadow: false },
    { backgroundColor: 'inverse', label: 'Inverse', shadow: false },
] as const;

export const Surfaces: Story = {
    render: (args) => (
        <GridGroup as="ul" columns={4}>
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
    args: { backgroundColor: 'tint', border: false, borderRadius: 'md' },
};
