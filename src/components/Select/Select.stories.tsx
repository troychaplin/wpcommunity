import type { Meta, StoryObj } from '@storybook/react-vite';
import { provinces } from '../../stories/fixtures';
import { Select } from './Select';

const meta = {
    title: 'Content/Select',
    component: Select,
    args: {
        label: 'Province or territory',
        name: 'province',
        options: provinces,
        placeholder: 'Choose one',
        defaultValue: '',
    },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
    args: { error: 'Please choose a province or territory.' },
};
