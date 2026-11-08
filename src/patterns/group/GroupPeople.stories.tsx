import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, sampleGroup, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { GroupPeople as GroupPeoplePattern } from './GroupPeople';

const meta = {
    ...patternMeta,
    title: 'Patterns/Group/Group People',
    tags: ['!autodocs'],
    decorators: [withPattern()],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const GroupPeople: Story = {
    render: () => <GroupPeoplePattern group={sampleGroup} />,
};
