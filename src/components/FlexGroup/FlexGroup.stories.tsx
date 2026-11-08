import type { Meta, StoryObj } from '@storybook/react-vite';
import { Card } from '../Card';
import { Eyebrow } from '../Eyebrow';
import { Pill } from '../Pill';
import { TextLink } from '../TextLink';
import { FlexGroup } from './FlexGroup';

const pills = (labels: string[]) => labels.map((label) => <Pill key={label}>{label}</Pill>);

const meta = {
    title: 'Components/Layout/Flex Group',
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
        children: pills(['Event', 'Announcement', 'Resource', 'Workshop', 'WordCamp', 'Accessibility']),
    },
};

// `wrap="nowrap"` keeps every item on one line, shrinking them instead of wrapping
export const NoWrap: Story = {
    args: {
        justify: 'start',
        gap: 'x-small',
        wrap: 'nowrap',
        style: { maxWidth: '20rem' },
        children: pills(['Event', 'Announcement', 'Resource', 'Workshop', 'WordCamp']),
    },
};

export const Column: Story = {
    args: { direction: 'column', align: 'start' },
};

// Main axis: start, center, end, space-between
export const Justify: Story = {
    render: () => (
        <FlexGroup direction="column" gap="medium">
            {(['start', 'center', 'end', 'space-between'] as const).map((justify) => (
                <FlexGroup key={justify} justify={justify} gap="x-small" style={{ outline: '1px dashed var(--wpc--color-border)' }}>
                    {pills([justify, 'two', 'three'])}
                </FlexGroup>
            ))}
        </FlexGroup>
    ),
};

// Cross axis: start, center, end, stretch, shown with items of different heights
export const Align: Story = {
    render: () => (
        <FlexGroup direction="column" gap="medium">
            {(['start', 'center', 'end', 'stretch'] as const).map((align) => (
                <FlexGroup key={align} align={align} gap="small" wrap="nowrap">
                    <Card paddingInline="small" paddingBlock="small">
                        <p>{align}</p>
                    </Card>
                    <Card paddingInline="small" paddingBlock="large">
                        <p>Taller item</p>
                    </Card>
                    <Card paddingInline="small" paddingBlock="small">
                        <p>Item</p>
                    </Card>
                </FlexGroup>
            ))}
        </FlexGroup>
    ),
};

// The spacing scale as gaps
export const Gap: Story = {
    render: () => (
        <FlexGroup direction="column" gap="medium">
            {(['none', '2x-small', 'x-small', 'small', 'medium', 'large'] as const).map((gap) => (
                <FlexGroup key={gap} gap={gap} align="center">
                    {pills([`gap ${gap}`, 'two', 'three'])}
                </FlexGroup>
            ))}
        </FlexGroup>
    ),
};

// `padding` insets the group; `margin` sets the space above and below it
export const PaddingAndMargin: Story = {
    args: {
        justify: 'start',
        padding: 'medium',
        margin: 'large',
        style: { outline: '1px dashed var(--wpc--color-border)' },
        children: pills(['padding medium', 'margin large']),
    },
};

// A width class caps the group and centres it
export const MaxWidth: Story = {
    args: {
        maxWidth: 'alignsmall',
        style: { outline: '1px dashed var(--wpc--color-border)' },
    },
};

// `as` sets the element: a list of pills
export const AsElement: Story = {
    args: {
        as: 'ul',
        justify: 'start',
        gap: 'x-small',
        style: { listStyle: 'none', padding: 0 },
        children: ['Event', 'Announcement', 'Resource'].map((label) => (
            <Pill key={label} as="li">
                {label}
            </Pill>
        )),
    },
};
