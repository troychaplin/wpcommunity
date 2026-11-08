import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { MeetupGroups as MeetupGroupsPattern } from './MeetupGroups';

const meta = {
    ...patternMeta,
    title: 'Patterns/Home/Meetup Groups',
    tags: ['!autodocs'],
    decorators: [withPattern({ hasPadding: false, directory: true })],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const MeetupGroups: Story = {
    render: () => <MeetupGroupsPattern />,
};
