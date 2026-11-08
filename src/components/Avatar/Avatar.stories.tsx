import type { Meta, StoryObj } from '@storybook/react-vite';
import { FlexGroup } from '../FlexGroup';
import { Avatar } from './Avatar';

const meta = {
    title: 'Components/Elements/Avatar',
    component: Avatar,
    args: { name: 'Elena Rostova' },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Photo: Story = {
    args: { src: 'globe.svg', size: 'large' },
};

export const Initials: Story = {};

export const SquareInitials: Story = {
    args: { name: 'Marie-Ange', size: 'small', shape: 'square' },
};

export const Sizes: Story = {
    render: (args) => (
        <FlexGroup gap="medium" align="center">
            <Avatar {...args} size="large" />
            <Avatar {...args} size="medium" />
            <Avatar {...args} size="small" />
        </FlexGroup>
    ),
};
