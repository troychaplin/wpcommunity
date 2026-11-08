import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Eyebrow } from '../Eyebrow';
import { FlexGroup } from '../FlexGroup';
import { FilterPill } from './FilterPill';

const meta = {
    title: 'Components/Forms/Filter Pill',
    component: FilterPill,
    args: { children: 'British Columbia' },
} satisfies Meta<typeof FilterPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Pressed: Story = {
    args: { children: 'All Regions', pressed: true },
};

const regions = ['All Regions', 'British Columbia', 'Prairies', 'Ontario', 'Québec', 'Atlantic'];

// FilterPill is stateless; FilterBar wraps this pattern for real use
const Row = () => {
    const [selected, setSelected] = useState(regions[0]);

    return (
        <FlexGroup gap="x-small" align="center">
            <Eyebrow as="span">Region</Eyebrow>
            {regions.map((label) => (
                <FilterPill key={label} pressed={label === selected} onClick={() => setSelected(label)}>
                    {label}
                </FilterPill>
            ))}
        </FlexGroup>
    );
};

export const InARow: Story = {
    render: () => <Row />,
};
