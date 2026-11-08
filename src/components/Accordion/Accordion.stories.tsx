import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '../Container';
import { Accordion } from './Accordion';

const meta = {
    title: 'Components/Content/Accordion',
    component: Accordion,
    args: {
        label: 'Getting started',
        children: (
            <>
                <Accordion.Item question="Do I need to be a developer to attend meetups?" defaultOpen>
                    <p>
                        Not at all. Meetups welcome designers, writers, site owners, marketers and people who are simply
                        curious about WordPress.
                    </p>
                </Accordion.Item>
                <Accordion.Item question="Are meetups free to attend?">
                    <p>Almost always. Some workshops ask for a small fee to cover the venue.</p>
                </Accordion.Item>
                <Accordion.Item question="How do I find out when the next event is?">
                    <p>Each group lists its events on its Meetup.com page and in its Slack channel.</p>
                </Accordion.Item>
            </>
        ),
    },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// The homepage FAQ: labelled groups on the tint tone
export const FaqGroups: Story = {
    parameters: { layout: 'fullscreen' },
    render: (args) => (
        <Container as="section" color="sage" maxWidth="alignfull" contentWidth="aligncontent">
            <Accordion {...args} />
            <Accordion label="Slack and online community">
                <Accordion.Item question="How do I join the WP Canada Slack?">
                    <p>Request an invite from the Slack section on the homepage.</p>
                </Accordion.Item>
                <Accordion.Item question="Is the Slack group bilingual?">
                    <p>Yes. Channels run in English and French, and many members speak both.</p>
                </Accordion.Item>
            </Accordion>
        </Container>
    ),
};
