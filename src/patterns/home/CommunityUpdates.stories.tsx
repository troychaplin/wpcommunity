import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { CommunityUpdates as CommunityUpdatesPattern } from './CommunityUpdates';

const meta = {
    ...patternMeta,
    title: 'Patterns/Home/Community Updates',
    tags: ['!autodocs'],
    decorators: [withPattern({ hasPadding: false })],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const CommunityUpdates: Story = {
    render: () => <CommunityUpdatesPattern />,
};
