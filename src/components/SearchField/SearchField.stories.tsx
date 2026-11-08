import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../Card';
import { SearchField } from './SearchField';

const meta = {
    title: 'Components/Forms/Search Field',
    component: SearchField,
    args: { label: 'Search groups by city', placeholder: 'Search your city...' },
} satisfies Meta<typeof SearchField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// On the tint surface of the Meetup Index sidebar
export const OnTint: Story = {
    decorators: [
        (Story) => (
            <Card backgroundColor="tint" border={false}>
                <Story />
            </Card>
        ),
    ],
};
