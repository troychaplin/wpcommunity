import type { Meta, StoryObj } from '@storybook/react-vite';
import { FlexGroup } from '../FlexGroup';
import { Heading } from './Heading';

const sizes = ['display', 'heading-large', 'heading-medium', 'heading-small', '2x-large', 'x-large', 'large'] as const;

const meta = {
    title: 'Components/Elements/Heading',
    component: Heading,
    args: { children: 'Gather under the canopy', as: 'h2', size: 'heading-large' },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// The accent word is set in crimson, as in the homepage hero
export const DisplayWithAccent: Story = {
    args: { as: 'h1', size: 'display', accent: 'canopy' },
};

// The HTML level (`as`) is independent of the visual size
export const Sizes: Story = {
    render: (args) => (
        <FlexGroup direction="column" gap="small">
            {sizes.map((size) => (
                <Heading key={size} {...args} as="p" size={size}>
                    {size}
                </Heading>
            ))}
        </FlexGroup>
    ),
};
