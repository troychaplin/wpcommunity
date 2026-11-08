import type { Meta, StoryObj } from '@storybook/react-vite';
import { groupStats } from '../../stories/fixtures';
import { GroupHeader } from './GroupHeader';

const meta = {
    title: 'Components/Headers/Group Header',
    component: GroupHeader,
    args: {
        region: 'Ontario / Great Lakes Region',
        status: 'Active Chapter',
        channel: { label: '#wp-ottawa', href: '#slack' },
        title: 'WordPress Ottawa',
        description:
            'Connecting Ottawa developers, designers, site owners, and beginners since 2011. We host monthly workshops, presentation evenings, and informal coffee hours to learn, troubleshoot, and build better web experiences together.',
        stats: groupStats,
    },
} satisfies Meta<typeof GroupHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Sections without data are left out
export const Minimal: Story = {
    args: { status: undefined, channel: undefined, stats: undefined },
};
