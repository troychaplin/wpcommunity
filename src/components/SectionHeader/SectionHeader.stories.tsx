import type { Meta, StoryObj } from '@storybook/react-vite';
import { SectionHeader } from './SectionHeader';

const meta = {
    title: 'Components/Headers/Section Header',
    component: SectionHeader,
    args: {
        prefix: 'Content components',
        title: 'Local Meetup Groups',
        meta: '23 active groups across Canada',
    },
} satisfies Meta<typeof SectionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDivider: Story = {
    args: { title: 'Local Resources & Chapter Links', meta: '04 Essential Touchpoints', prefix: undefined, hasDivider: true },
};

// Used for Community updates and Common questions
export const Centered: Story = {
    args: {
        prefix: undefined,
        meta: undefined,
        title: 'Common questions',
        description: 'Everything you need to know about joining the Canadian WordPress community.',
        align: 'center',
    },
};
