import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, sampleGroup, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { NextEvent as NextEventPattern } from './NextEvent';

const meta = {
    ...patternMeta,
    title: 'Patterns/Group/Next Event',
    tags: ['!autodocs'],
    decorators: [withPattern()],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const NextEvent: Story = {
    render: () => <NextEventPattern group={sampleGroup} />,
};
