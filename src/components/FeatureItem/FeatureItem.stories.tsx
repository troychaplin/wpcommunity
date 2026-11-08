import type { Meta, StoryObj } from '@storybook/react-vite';
import { GridGroup } from '../GridGroup';
import { FeatureItem } from './FeatureItem';

const meta = {
    title: 'Components/Content/Feature Item',
    component: FeatureItem,
    args: {
        icon: 'map-pin',
        title: 'Find your meetup',
        href: '#groups',
        linkText: 'Browse groups',
        children: 'Browse 23 active local groups organized by province. Most groups welcome all skill levels.',
    },
} satisfies Meta<typeof FeatureItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// The homepage's "New here?" row
export const InAGrid: Story = {
    render: (args) => (
        <GridGroup columns={4} dividers="columns">
            <FeatureItem {...args} />
            <FeatureItem icon="messages-square" title="Join Slack" href="#slack" linkText="Get an invite">
                Connect with 2,400+ Canadian WordPress people between events.
            </FeatureItem>
            <FeatureItem icon="circle-plus" title="Organize a group" href="#form" linkText="Submit a group">
                Don&apos;t see your city listed? Submit your group and we&apos;ll help you get set up.
            </FeatureItem>
            <FeatureItem icon="star" title="Attend a WordCamp" href="#wordcamp" linkText="Find a WordCamp">
                WordCamps are official, volunteer-run WordPress conferences held across Canada.
            </FeatureItem>
        </GridGroup>
    ),
};
