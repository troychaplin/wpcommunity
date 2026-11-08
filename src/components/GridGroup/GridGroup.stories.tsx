import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../Card';
import { GroupCard } from '../GroupCard';
import { groups } from '../../stories/fixtures';
import { GridGroup } from './GridGroup';

const meta = {
    title: 'Components/Layout/Grid Group',
    component: GridGroup,
    args: {
        columns: 3,
        children: ['WordPress Toronto', 'WordPress Vancouver', 'WordPress Montréal'].map((name) => (
            <Card key={name}>
                <h4>{name}</h4>
                <p>Monthly presentations, workshops and networking.</p>
            </Card>
        )),
    },
} satisfies Meta<typeof GridGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeColumns: Story = {};

// Lines between every cell, as in the homepage group grid
export const WithDividers: Story = {
    args: {
        dividers: 'all',
        children: groups.map(({ regionKey, ...group }) => (
            <GroupCard key={group.name} href={`#${regionKey}`} {...group} />
        )),
    },
};
