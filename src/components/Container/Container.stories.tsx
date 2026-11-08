import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Accordion } from '../Accordion';
import { Card } from '../Card';
import { Eyebrow } from '../Eyebrow';
import { FeatureItem } from '../FeatureItem';
import { FlexGroup } from '../FlexGroup';
import { GridGroup } from '../GridGroup';
import { Heading } from '../Heading';
import { Main } from '../Main';
import { SectionHeader } from '../SectionHeader';
import { TextLink } from '../TextLink';
import { Container } from './Container';

// The shared surface set (src/styles/mixins/_surfaces.scss)
const tones = ['white', 'stone', 'sage', 'blush', 'crimson', 'forest'] as const;

const meta = {
    title: 'Components/Layout/Container',
    component: Container,
    parameters: { layout: 'fullscreen' },
    args: { as: 'section', maxWidth: 'alignfull', contentWidth: 'alignwide', color: 'stone' },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

// Each tone re-declares the role tokens, so text, headings, borders and eyebrows inside follow it
export const Tone: Story = {
    render: (args) => (
        <Container {...args}>
            <SectionHeader
                prefix="Container"
                title={`The ${args.color} tone`}
                meta={`color="${args.color}"`}
                description="Body text, headings, borders and eyebrows follow the tone's role colours."
            />
            <p>
                A paragraph with an <a href="#tones">inline link</a>.
            </p>
            <Heading as="p" size="heading-small" accent="canopy">
                Accent words follow the canopy tone
            </Heading>
            <FlexGroup gap="large" align="center">
                <Eyebrow tone="accent">Upcoming Gathering</Eyebrow>
                <Eyebrow>Thursday, November 14</Eyebrow>
                <TextLink href="#tones" hasArrow>
                    Read recap
                </TextLink>
            </FlexGroup>
            <ButtonGroup>
                <Button text="RSVP on Meetup.com" color={args.color === 'crimson' ? 'white' : 'crimson'} />
                {args.color === 'forest' || args.color === 'crimson' ? (
                    <Button text="Propose a Talk" color="inverse" />
                ) : (
                    <Button text="Find on Slack" color="white" />
                )}
            </ButtonGroup>
            <GridGroup columns={2}>
                <Card>
                    <p>A white card keeps dark text in any tone.</p>
                </Card>
                <Card backgroundColor="forest">
                    <p>A forest card switches to light text.</p>
                </Card>
            </GridGroup>
        </Container>
    ),
};

export const AllTones: Story = {
    render: (args) => (
        <>
            {tones.map((tone) => (
                <Container key={tone} {...args} color={tone}>
                    <SectionHeader prefix="Container" title={`The ${tone} tone`} meta={`color="${tone}"`} />
                    <p>
                        A paragraph with an <a href="#tones">inline link</a>.
                    </p>
                </Container>
            ))}
        </>
    ),
};

// `border` rules a toned band in its tone's border colour. Full-width bands never get side
// borders, and two stacked bands share one rule where they meet.
export const BorderedBands: Story = {
    render: (args) => (
        <>
            <Container {...args} color="white" border="both">
                <SectionHeader title="White, border both" meta='border="both"' />
            </Container>
            <Container {...args} color="white" border="top">
                <SectionHeader title="White, border top" meta="shares the rule above" />
            </Container>
            <Container {...args} color="forest" border="top">
                <SectionHeader title="Forest, border top" meta="forest-800" />
            </Container>
            <Container {...args} color="sage" border="all">
                <SectionHeader title="Tint, border all" meta="sage-dark; no side borders at full width" />
            </Container>
        </>
    ),
};

// A toned Container at content or wide width is a panel: its edges sit on the page edge and its
// content is inset to clear the background. Without a colour it adds no padding at all. Main
// supplies the page edge, as on the site.
export const BoxedPanel: Story = {
    args: { maxWidth: 'alignwide', contentWidth: 'alignwide', color: 'sage', border: 'all' },
    render: (args) => (
        <Main>
            <Container as="section" maxWidth="alignwide" contentWidth="alignwide">
                <SectionHeader title="A plain Container" meta="content on the page edge" />
            </Container>
            <Container {...args}>
                <SectionHeader title="A boxed tint panel" meta="edges on the page edge, content inset" />
                <p>
                    A paragraph with an <a href="#tones">inline link</a>.
                </p>
            </Container>
        </Main>
    ),
};

// `hasRule` rules the content's start edge and insets the content beside it. A divided GridGroup
// inside lines its first column up with the rule, so the heading and the first feature share an
// edge. Main supplies the page edge, as on the site.
export const RuledContent: Story = {
    render: () => (
        <Main hasPadding={false}>
            <Container as="section" maxWidth="alignwide" contentWidth="alignwide" hasRule>
                <SectionHeader
                    title="New here? Start with these."
                    description="Whether you're new to WordPress or a seasoned developer, there's a place for you."
                />
                <GridGroup columns={4} dividers="columns">
                    <FeatureItem icon="map-pin" title="Find your meetup" href="#groups" linkText="Browse groups">
                        Browse 23 active local groups organized by province.
                    </FeatureItem>
                    <FeatureItem icon="messages-square" title="Join Slack" href="#slack" linkText="Get an invite">
                        Connect with 2,400+ Canadian WordPress people.
                    </FeatureItem>
                    <FeatureItem icon="circle-plus" title="Organize a group" href="#form" linkText="Submit a group">
                        Don&apos;t see your city listed? Submit your group.
                    </FeatureItem>
                    <FeatureItem icon="star" title="Attend a WordCamp" href="#wordcamp" linkText="Find a WordCamp">
                        Volunteer-run WordPress conferences across Canada.
                    </FeatureItem>
                </GridGroup>
            </Container>
            <Container as="section" color="sage" maxWidth="alignfull" contentWidth="alignwide" hasRule>
                <SectionHeader title="Common questions" description="On sage, the rule takes the sage border role." />
                <Accordion label="Getting started">
                    <Accordion.Item question="Do I need to be a developer to attend meetups?" defaultOpen>
                        <p>Not at all. Meetups welcome designers, writers, site owners and the curious.</p>
                    </Accordion.Item>
                    <Accordion.Item question="Are meetups free to attend?">
                        <p>Almost always.</p>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </Main>
    ),
};
