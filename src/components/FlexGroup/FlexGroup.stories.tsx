import type { Meta, StoryObj } from '@storybook/react-vite';
import { Eyebrow } from '../Eyebrow';
import { Pill } from '../Pill';
import { TextLink } from '../TextLink';
import { FlexGroup } from './FlexGroup';

const meta = {
    title: 'Layout/FlexGroup',
    component: FlexGroup,
    args: {
        justify: 'space-between',
        align: 'center',
        gap: 'small',
        children: (
            <>
                <Eyebrow>Showing 6 of 23 groups</Eyebrow>
                <TextLink href="#flex">View all groups</TextLink>
            </>
        ),
    },
} satisfies Meta<typeof FlexGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SpaceBetween: Story = {};

export const Wrapping: Story = {
    args: {
        justify: 'start',
        gap: 'x-small',
        children: ['Event', 'Announcement', 'Resource', 'Workshop', 'WordCamp', 'Accessibility'].map((label) => (
            <Pill key={label}>{label}</Pill>
        )),
    },
};

export const Column: Story = {
    args: { direction: 'column', align: 'start' },
};
