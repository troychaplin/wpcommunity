import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { StartGroup as StartGroupPattern } from './StartGroup';

const meta = {
    ...patternMeta,
    title: 'Patterns/Home/Start Group',
    tags: ['!autodocs'],
    decorators: [withPattern({ hasPadding: false })],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const StartGroup: Story = {
    render: () => <StartGroupPattern />,
};
