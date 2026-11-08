import type { Meta, StoryObj } from '@storybook/react-vite';
import { FlexGroup } from '../FlexGroup';
import { Icon } from './Icon';
import { icons } from './icons';
import type { IconName } from './icons';

const iconNames = Object.keys(icons) as IconName[];

const meta = {
    title: 'Components/Elements/Icon',
    component: Icon,
    args: { name: 'map-pin', size: 'heading-small' },
    argTypes: {
        name: { control: 'select', options: iconNames },
    },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// A `label` makes the icon announced; without one it is decorative
export const Labelled: Story = {
    args: { name: 'search', label: 'Search' },
};

// Every icon in the registry (src/components/Icon/icons.ts)
export const Registry: Story = {
    render: (args) => (
        <FlexGroup gap="medium" align="center">
            {iconNames.map((name) => (
                <Icon key={name} {...args} name={name} label={name} />
            ))}
        </FlexGroup>
    ),
};
