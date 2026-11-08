import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../Card';
import { Column } from './Column';

const meta = {
    title: 'Components/Layout/Column',
    component: Column,
    args: {
        cols: '2',
        children: (
            <>
                <Column.Content>
                    <Card>
                        <p>First column</p>
                    </Card>
                </Column.Content>
                <Column.Content>
                    <Card>
                        <p>Second column</p>
                    </Card>
                </Column.Content>
            </>
        ),
    },
} satisfies Meta<typeof Column>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Halves: Story = {};

// Primary contact beside the organizing team on the group page
export const OneThirdTwoThirds: Story = {
    args: {
        cols: '1/3',
        children: (
            <>
                <Column.Content>
                    <Card>
                        <p>One third: primary contact</p>
                    </Card>
                </Column.Content>
                <Column.Content>
                    <Card>
                        <p>Two thirds: organizing team</p>
                    </Card>
                </Column.Content>
            </>
        ),
    },
};

// `isFirst` moves a column to the top when the columns stack on phones
export const ReorderedOnMobile: Story = {
    args: {
        children: (
            <>
                <Column.Content>
                    <Card>
                        <p>Second in the source, first in the row</p>
                    </Card>
                </Column.Content>
                <Column.Content isFirst>
                    <Card>
                        <p>Shown first when stacked</p>
                    </Card>
                </Column.Content>
            </>
        ),
    },
};
