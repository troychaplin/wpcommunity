import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { CTABand } from './CTABand';

const meta = {
    title: 'Components/Content/CTA Band',
    component: CTABand,
    args: {
        eyebrow: 'Upcoming Gathering',
        title: 'Fall Site Editing & Block Themes Clinic',
        details: ['Thursday, November 14', '6:30 PM EST'],
        location: 'George Brown College (Waterfront Campus) & Online Zoom',
        actions: (
            <ButtonGroup>
                <Button text="RSVP on Meetup.com" href="#rsvp" />
                <Button text="Propose a Talk" color="inverse" href="#talk" />
            </ButtonGroup>
        ),
    },
} satisfies Meta<typeof CTABand>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutLocation: Story = {
    args: { location: undefined },
};
