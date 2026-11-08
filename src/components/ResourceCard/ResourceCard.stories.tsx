import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridGroup } from '../GridGroup';
import { resources } from '../../stories/fixtures';
import { ResourceCard } from './ResourceCard';

const meta = {
    title: 'Components/Cards/Resource Card',
    component: ResourceCard,
    args: { ...resources[0], href: '#resources' },
} satisfies Meta<typeof ResourceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// The group page's local resources row
export const InAGrid: Story = {
    render: () => (
        <GridGroup columns={4} gap="small">
            {resources.map((resource) => (
                <ResourceCard key={resource.title} href="#resources" {...resource} />
            ))}
        </GridGroup>
    ),
};
