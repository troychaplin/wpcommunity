import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { SlackInvite as SlackInvitePattern } from './SlackInvite';

const meta = {
    ...patternMeta,
    title: 'Patterns/Home/Slack Invite',
    tags: ['!autodocs'],
    decorators: [withPattern({ hasPadding: false })],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const SlackInvite: Story = {
    render: () => <SlackInvitePattern />,
};
