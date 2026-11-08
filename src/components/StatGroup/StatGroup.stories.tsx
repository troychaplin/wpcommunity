import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../Card';
import { chatStats, groupStats } from '../../stories/fixtures';
import { StatGroup } from './StatGroup';

const meta = {
    title: 'Components/Content/Stat Group',
    component: StatGroup,
    args: {
        children: groupStats.map((stat) => <StatGroup.Item key={stat.label} {...stat} />),
    },
} satisfies Meta<typeof StatGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

// In a tint card, as in the group page header
export const Serif: Story = {
    decorators: [
        (Story) => (
            <Card backgroundColor="tint" borderRadius="md">
                <Story />
            </Card>
        ),
    ],
};

// The Slack preview footer
export const Mono: Story = {
    args: {
        variant: 'mono',
        children: chatStats.map((stat) => <StatGroup.Item key={stat.label} {...stat} />),
    },
};
