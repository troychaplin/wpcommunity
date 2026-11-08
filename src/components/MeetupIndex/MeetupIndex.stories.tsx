import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchField } from '../SearchField';
import { meetupRegions } from '../../stories/fixtures';
import { MeetupIndex } from './MeetupIndex';

const meta = {
    title: 'Components/Navigation/Meetup Index',
    component: MeetupIndex,
    args: {
        version: 'v1.4',
        search: <SearchField label="Search groups by city" placeholder="Search your city..." />,
        regions: meetupRegions,
        meta: [
            { label: 'Status', value: 'Active Community Hub' },
            { label: 'Connect', value: '2,400+ Members' },
        ],
    },
} satisfies Meta<typeof MeetupIndex>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutSearch: Story = {
    args: { search: undefined },
};
