import type { Meta, StoryObj } from '@storybook/react-vite';
import { Figure } from '../Figure';
import { Article } from './Article';

const meta = {
    title: 'Page Structure/Article',
    component: Article,
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithChildren: Story = {
    args: {
        children: (
            <>
                <h2>Fall Site Editing &amp; Block Themes Clinic</h2>
                <p>
                    Bring your questions about block themes, patterns and the Site Editor. We&apos;ll work through real
                    problems together.
                </p>
                <Figure caption="A figure with a caption" size="md">
                    <img src="globe.svg" alt="Globe illustration" width={480} height={480} />
                </Figure>
                <p>
                    Prose links are <a href="#article">semibold</a> and underline on hover.
                </p>
            </>
        ),
    },
};

// HTML from a CMS, such as WordPress post content
export const WithHtmlContent: Story = {
    args: {
        content:
            '<h2>From the WordPress editor</h2><p>An HTML string renders as the article body, for content that comes from <a href="#article">WordPress</a>.</p><ul><li>Lists</li><li>Links</li></ul>',
    },
};
