import type { Meta, StoryObj } from '@storybook/react-vite';
import { Container } from '../Container';
import { Heading } from '../Heading';
import { Main } from './Main';

const meta = {
    title: 'Components/Template Parts/Main',
    component: Main,
    parameters: { layout: 'fullscreen' },
    args: {
        children: (
            <Container as="section" maxWidth="alignwide" contentWidth="aligncontent">
                <Heading as="h1" size="heading-large">
                    Page title
                </Heading>
                <p>
                    Main renders <code>&lt;main id=&quot;main&quot;&gt;</code>, the SkipLink target. Prose links
                    are <a href="#main">semibold</a> and underline on hover.
                </p>
            </Container>
        ),
    },
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

// The homepage drops the block padding so the hero sits flush under the header
export const WithoutPadding: Story = {
    args: { hasPadding: false },
};
