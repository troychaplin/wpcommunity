import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Eyebrow } from '../Eyebrow';
import { GridGroup } from '../GridGroup';
import { GroupCard } from '../GroupCard';
import { SearchField } from '../SearchField';
import { groups, regionOptions } from '../../stories/fixtures';
import { FilterBar } from './FilterBar';

const meta = {
    title: 'Components/Forms/Filter Bar',
    component: FilterBar,
    args: { label: 'Region', options: regionOptions, value: 'all', onChange: () => {} },
} satisfies Meta<typeof FilterBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// FilterBar and SearchField are controlled; this wrapper owns the state and filters the list, the
// pattern src/features/directory uses on the homepage
const Directory = () => {
    const [region, setRegion] = useState('all');
    const [query, setQuery] = useState('');

    const search = query.trim().toLowerCase();
    const visible = groups.filter(
        (group) => (region === 'all' || group.regionKey === region) && group.name.toLowerCase().includes(search),
    );

    return (
        <>
            <SearchField
                label="Search groups by city"
                placeholder="Search your city..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            <FilterBar label="Region" options={regionOptions} value={region} onChange={setRegion} />
            <GridGroup columns={3} dividers="all">
                {visible.map(({ regionKey, ...group }) => (
                    <GroupCard key={group.name} href={`#${regionKey}`} {...group} />
                ))}
            </GridGroup>
            <Eyebrow aria-live="polite">
                Showing {visible.length} of {groups.length} groups
            </Eyebrow>
        </>
    );
};

export const FilteringAList: Story = {
    render: () => <Directory />,
};
