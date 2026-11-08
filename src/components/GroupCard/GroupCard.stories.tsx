import type { Meta, StoryObj } from '@storybook/react-vite';
import { groups } from '../../stories/fixtures';
import { GroupCard } from './GroupCard';

const { regionKey, ...toronto } = groups[0];

const meta = {
    title: 'Content/GroupCard',
    component: GroupCard,
    args: { ...toronto, href: `#${regionKey}` },
} satisfies Meta<typeof GroupCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// Formats and number locale come from the page, so the card reads naturally in French
export const French: Story = {
    args: {
        region: 'Ontario',
        description:
            'La plus grande communauté WordPress au Canada. Présentations mensuelles, ateliers et réseautage pour tous les niveaux.',
        cadence: 'mensuelles',
        linkText: 'Voir le groupe',
        membersFormat: '{members} membres',
        cadenceFormat: 'Rencontres {cadence}',
        locale: 'fr-CA',
    },
};
