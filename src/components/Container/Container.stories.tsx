import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';
import { Card } from '../Card';
import { Eyebrow } from '../Eyebrow';
import { FlexGroup } from '../FlexGroup';
import { GridGroup } from '../GridGroup';
import { Heading } from '../Heading';
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
