import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextField } from './TextField';

const meta = {
    title: 'Content/TextField',
    component: TextField,
    args: { label: 'Your name', name: 'name', placeholder: 'Jane Smith' },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Email: Story = {
    args: { label: 'Email address', name: 'email', type: 'email', placeholder: 'jane@example.ca' },
};

// The message renders under the field and is linked with aria-describedby
export const WithError: Story = {
    args: { label: 'Email address', name: 'email', type: 'email', defaultValue: 'jane@', error: 'Please enter a valid email address.' },
};

export const WithIcon: Story = {
    args: { label: 'City', name: 'city', icon: 'map-pin', placeholder: 'Winnipeg' },
};

// The label stays available to screen readers
export const HiddenLabel: Story = {
    args: { hideLabel: true },
};
