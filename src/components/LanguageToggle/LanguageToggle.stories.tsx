import type { Meta, StoryObj } from '@storybook/react-vite';
import { languages } from '../../stories/fixtures';
import { LanguageToggle } from './LanguageToggle';

const meta = {
    title: 'Components/Navigation/Language Toggle',
    component: LanguageToggle,
    args: { languages },
} satisfies Meta<typeof LanguageToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// The header pill
export const Segmented: Story = {};

// The footer list
export const List: Story = {
    args: { variant: 'list' },
};
