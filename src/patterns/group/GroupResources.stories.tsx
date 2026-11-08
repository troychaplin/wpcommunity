import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, sampleGroup, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { GroupResources as GroupResourcesPattern } from './GroupResources';

const meta = {
    ...patternMeta,
    title: 'Patterns/Group/Group Resources',
    tags: ['!autodocs'],
    decorators: [withPattern()],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const GroupResources: Story = {
    render: () => <GroupResourcesPattern group={sampleGroup} />,
};
