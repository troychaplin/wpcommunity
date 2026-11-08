import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { Card } from '../Card';
import { FlexGroup } from '../FlexGroup';
import { GridGroup } from '../GridGroup';
import { Heading } from '../Heading';
import { volunteers } from '../../stories/fixtures';
import { PersonCard } from './PersonCard';

const meta = {
    title: 'Components/Cards/Person Card',
    component: PersonCard,
    args: {
        label: 'primary group contact',
        name: 'Elena Rostova',
        role: 'Lead Organizer & Liaison',
        handle: '@elena on Slack',
        bio: (
            <p>
                Co-leading Toronto meetups since 2018. Focused on web accessibility, custom block development, and
                making every newcomer feel welcome.
            </p>
        ),
        actions: (
            <>
                <Button text="Contact Organizer" href="#contact" />
                <Button text="Find on Slack" color="white" href="#slack" />
            </>
        ),
    },
} satisfies Meta<typeof PersonCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Featured: Story = {};

export const WithPhoto: Story = {
    args: { avatarSrc: 'globe.svg' },
};

export const Compact: Story = {
    args: { ...volunteers[0], variant: 'compact', label: undefined, bio: undefined, actions: undefined },
};

// The organizing team panel on the group page
export const Team: Story = {
    render: () => (
        <Card shadow paddingInline="medium" paddingBlock="medium">
            <FlexGroup direction="column" gap="medium">
                <Heading size="heading-medium">Organizing Team &amp; Volunteers</Heading>
                <GridGroup as="ul" columns={3} gap="small">
                    {volunteers.map((person) => (
                        <li key={person.name}>
                            <PersonCard variant="compact" {...person} />
                        </li>
                    ))}
                </GridGroup>
            </FlexGroup>
        </Card>
    ),
};
