import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';

const meta = {
    title: 'Components/Forms/Text Area',
    component: TextArea,
    args: {
        label: 'Tell us about your group',
        name: 'about',
        placeholder: 'Who is the group for? What kind of events do you plan?',
    },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithError: Story = {
    args: { error: 'Please keep this under 1,000 characters.' },
};
