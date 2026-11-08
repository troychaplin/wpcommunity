import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { ButtonGroup } from './ButtonGroup';

const meta = {
    title: 'Components/Elements/Button Group',
    component: ButtonGroup,
    args: {
        children: (
            <>
                <Button text="Find Local Meetups" icon="map-pin" href="#groups" isLarge />
                <Button text="Join Canadian Slack" icon="message-circle-more" color="white" href="#slack" isLarge />
            </>
        ),
    },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Start: Story = {};

export const Center: Story = {
    args: { align: 'center' },
};

export const End: Story = {
    args: { align: 'end' },
};
