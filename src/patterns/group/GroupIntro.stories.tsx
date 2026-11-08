import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, sampleGroup, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { GroupIntro as GroupIntroPattern } from './GroupIntro';

const meta = {
    ...patternMeta,
    title: 'Patterns/Group/Group Intro',
    tags: ['!autodocs'],
    decorators: [withPattern()],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const GroupIntro: Story = {
    render: () => <GroupIntroPattern group={sampleGroup} />,
};
