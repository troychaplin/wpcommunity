import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Card } from '../Card';
import { Eyebrow } from '../Eyebrow';
import { FlexGroup } from '../FlexGroup';
import { GridGroup } from '../GridGroup';
import { Heading } from '../Heading';
import { Main } from '../Main';
import { SectionHeader } from '../SectionHeader';
import { TextLink } from '../TextLink';
import { Container } from './Container';

const tones = ['canvas', 'tint', 'blush', 'inverse', 'white'] as const;

const meta = {
    title: 'Components/Layout/Container',
    component: Container,
    parameters: { layout: 'fullscreen' },
    args: { as: 'section', maxWidth: 'alignfull', contentWidth: 'alignwide', color: 'canvas' },
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
                <Button text="RSVP on Meetup.com" />
                {args.color === 'inverse' ? (
                    <Button text="Propose a Talk" color="inverse" />
                ) : (
                    <Button text="Find on Slack" color="secondary" />
                )}
            </ButtonGroup>
            <GridGroup columns={2}>
                <Card>
                    <p>A white card keeps dark text in any tone.</p>
                </Card>
                <Card backgroundColor="inverse">
                    <p>An inverse card switches to light text.</p>
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
            <Container {...args} color="inverse" border="top">
                <SectionHeader title="Inverse, border top" meta="pine" />
            </Container>
            <Container {...args} color="tint" border="all">
                <SectionHeader title="Tint, border all" meta="sage-dark; no side borders at full width" />
            </Container>
        </>
    ),
};

// A toned Container at content or wide width is a panel: its edges sit on the page edge and its
// content is inset to clear the background. Without a colour it adds no padding at all. Main
// supplies the page edge, as on the site.
export const BoxedPanel: Story = {
    args: { maxWidth: 'alignwide', contentWidth: 'alignwide', color: 'tint', border: 'all' },
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
