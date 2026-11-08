import type { Meta, StoryObj } from '@storybook/react-vite';
import { patternMeta, withPattern } from '../../stories/patternDecorator';
import type { PatternArgs } from '../../stories/patternDecorator';
import { GroupDirectory as GroupDirectoryPattern } from './GroupDirectory';

const meta = {
    ...patternMeta,
    title: 'Patterns/Groups/Group Directory',
    tags: ['!autodocs'],
    decorators: [withPattern({ directory: true })],
} satisfies Meta<PatternArgs>;

export default meta;
type Story = StoryObj<PatternArgs>;

export const GroupDirectory: Story = {
    render: () => <GroupDirectoryPattern />,
};
