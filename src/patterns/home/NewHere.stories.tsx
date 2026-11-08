import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { NewHere as NewHerePattern } from './NewHere';

const meta = {
    ...patternMeta,
    title: 'Patterns/Home/New Here',
    tags: ['!autodocs'],
    decorators: [withPattern({ hasPadding: false })],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const NewHere: Story = {
    render: () => <NewHerePattern />,
};
