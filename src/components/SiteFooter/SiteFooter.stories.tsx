import type { Meta, StoryObj } from '@storybook/react-vite';
import { LanguageToggle } from '../LanguageToggle';
import { footerNav, languages } from '../../stories/fixtures';
import { SiteFooter } from './SiteFooter';

const meta = {
    title: 'Components/Template Parts/Site Footer',
    component: SiteFooter,
    parameters: { layout: 'fullscreen' },
    args: {
        name: 'WP Canada',
        nameHref: '#home',
        description: 'A bilingual community for WordPress developers, designers, writers and organizers across Canada.',
        navLabel: 'Footer',
        navItems: footerNav,
        legal: '© 2026 WP Canada. Volunteer-run and independent.',
        meta: (
            <>
                Part of the global <a href="https://wordpress.org">WordPress</a> community.
            </>
        ),
        children: <LanguageToggle languages={languages} variant="list" />,
    },
} satisfies Meta<typeof SiteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Minimal: Story = {
    args: { navItems: undefined, children: undefined, meta: undefined },
};
