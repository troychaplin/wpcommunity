import type { Meta, StoryObj } from '@storybook/react-vite';
import { updates } from '../../stories/fixtures';
import { UpdateList } from './UpdateList';

const meta = {
    title: 'Content/UpdateList',
    component: UpdateList,
    args: {
        children: updates.map((update) => <UpdateList.Item key={update.title} href="#updates" {...update} />),
    },
} satisfies Meta<typeof UpdateList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleItem: Story = {
    args: {
        children: <UpdateList.Item href="#updates" {...updates[0]} />,
    },
};
