import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../Card';
import { Column } from '../Column';
import { Aside } from './Aside';

const meta = {
    title: 'Components/Layout/Aside',
    component: Aside,
    args: {
        children: (
            <Card backgroundColor="tint" border={false}>
                <p>A sticky aside</p>
            </Card>
        ),
    },
} satisfies Meta<typeof Aside>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Scroll the canvas: the aside stays in view beside the long column
export const Sticky: Story = {
    args: { isSticky: true, topSpace: 24 },
    render: (args) => (
        <Column cols="2/3" maxWidth="alignwide">
            <Column.Content>
                {Array.from({ length: 12 }, (_, index) => (
                    <p key={index}>
                        Bring your questions about block themes, patterns and the Site Editor. We&apos;ll work
                        through real problems together.
                    </p>
                ))}
            </Column.Content>
            <Column.Content>
                <Aside {...args} />
            </Column.Content>
        </Column>
    ),
};
