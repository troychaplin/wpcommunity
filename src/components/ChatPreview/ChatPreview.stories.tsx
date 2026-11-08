import type { Meta, StoryObj } from '@storybook/react-vite';
import { chatMessages, chatStats } from '../../stories/fixtures';
import { ChatPreview } from './ChatPreview';

const meta = {
    title: 'Components/Content/Chat Preview',
    component: ChatPreview,
    args: { channel: 'wp-canada-general', messages: chatMessages, stats: chatStats },
} satisfies Meta<typeof ChatPreview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutStats: Story = {
    args: { stats: undefined },
};
