import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { MeetupIndex } from '../MeetupIndex';
import { SearchField } from '../SearchField';
import { meetupRegions } from '../../stories/fixtures';
import { Hero } from './Hero';

const meta = {
    title: 'Sections/Hero',
    component: Hero,
    parameters: { layout: 'fullscreen' },
    args: {
        title: 'Gather under the canopy',
        accent: 'canopy',
        lead: "A welcoming, bilingual space for Canada's WordPress developers, designers, writers, and organizers. Find your local meetup, share knowledge, and build together.",
        actions: (
            <ButtonGroup>
                <Button text="Find Local Meetups" icon="map-pin" href="#groups" isLarge />
                <Button text="Join Canadian Slack" icon="message-circle-more" color="secondary" href="#slack" isLarge />
            </ButtonGroup>
        ),
    },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// The homepage hero, with the Meetup Index beside it
export const WithMeetupIndex: Story = {
    args: {
        aside: (
            <MeetupIndex
                version="v1.4"
                search={<SearchField label="Search groups by city" placeholder="Search your city..." />}
                regions={meetupRegions}
                meta={[
                    { label: 'Status', value: 'Active Community Hub' },
                    { label: 'Connect', value: '2,400+ Members' },
                ]}
            />
        ),
    },
};

export const ContentOnly: Story = {};
