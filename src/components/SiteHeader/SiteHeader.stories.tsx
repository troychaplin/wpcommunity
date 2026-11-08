import type { Meta, StoryObj } from '@storybook/react-vite';
import { LanguageToggle } from '../LanguageToggle';
import { headerNav, languages } from '../../stories/fixtures';
import { SiteHeader } from './SiteHeader';

const meta = {
    title: 'Components/Template Parts/Site Header',
    component: SiteHeader,
    parameters: { layout: 'fullscreen' },
    args: {
        homeHref: '#home',
        navItems: headerNav,
        children: <LanguageToggle languages={languages} />,
    },
} satisfies Meta<typeof SiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithTitleAccent: Story = {
    args: { siteTitle: 'WP Community Canada', siteTitleAccent: 'Canada' },
};

// Below the tablet breakpoint the nav and actions fold behind the Menu button
export const Mobile: Story = {
    globals: { viewport: { value: 'mobile1', isRotated: false } },
};
