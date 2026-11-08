import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { CommonQuestions as CommonQuestionsPattern } from './CommonQuestions';

const meta = {
    ...patternMeta,
    title: 'Patterns/Home/Common Questions',
    tags: ['!autodocs'],
    decorators: [withPattern({ hasPadding: false })],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const CommonQuestions: Story = {
    render: () => <CommonQuestionsPattern />,
};
