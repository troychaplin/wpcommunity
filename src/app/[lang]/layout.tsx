import type { Metadata } from 'next';
import { Cormorant_Garamond, IBM_Plex_Mono, Plus_Jakarta_Sans } from 'next/font/google';
import { Body } from '@/components/Body';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { SkipLink } from '@/components/SkipLink';
import { LocaleSwitcher } from '@/features/locale/LocaleSwitcher';
import { locales } from '@/i18n/config';
import { getI18n } from '@/i18n/getDictionary';
import '@/styles/main.scss';

const cormorant = Cormorant_Garamond({
    variable: '--font-cormorant',
    subsets: ['latin'],
});

const jakarta = Plus_Jakarta_Sans({
    variable: '--font-jakarta',
    subsets: ['latin'],
});

const plexMono = IBM_Plex_Mono({
    variable: '--font-plex-mono',
    subsets: ['latin'],
    weight: ['400', '500'],
});

export async function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
    const { tag, t } = await getI18n();

    return {
        metadataBase: new URL('https://wpcommunity.ca'),
        title: { default: t.meta.siteName, template: `%s | ${t.meta.siteName}` },
        description: t.meta.description,
        openGraph: { siteName: t.meta.siteName, locale: tag.replace('-', '_'), type: 'website' },
    };
}

export default async function RootLayout({ children }: LayoutProps<'/[lang]'>) {
    const { locale, t } = await getI18n();

    return (
        <html lang={locale} className={`${cormorant.variable} ${jakarta.variable} ${plexMono.variable}`}>
            <Body>
                <SkipLink>{t.skipLink}</SkipLink>
                <SiteHeader
                    homeHref={`/${locale}`}
                    navItems={[
                        { href: `/${locale}/groups`, label: t.header.nav.meetups },
                        { href: `/${locale}#start-a-group`, label: t.header.nav.submit },
                        { href: `/${locale}#new-here`, label: t.header.nav.story },
                    ]}
                    navLabel={t.header.navLabel}
                    menuLabel={t.header.menu}
                    closeLabel={t.header.close}
                >
                    <LocaleSwitcher locale={locale} label={t.language} />
                </SiteHeader>
                {children}
                <SiteFooter
                    name={t.meta.siteName}
                    nameHref={`/${locale}`}
                    description={t.footer.description}
                    navLabel={t.footer.navLabel}
                    navItems={[
                        { href: `/${locale}/groups`, label: t.footer.nav.groups },
                        { href: `/${locale}#slack`, label: t.footer.nav.slack },
                        { href: `/${locale}#start-a-group`, label: t.footer.nav.submit },
                        { href: `/${locale}#new-here`, label: t.footer.nav.gettingStarted },
                        { href: `/${locale}#faq`, label: t.footer.nav.faq },
                    ]}
                    legal={t.footer.legal}
                    meta={
                        <>
                            {t.footer.ecosystem.before}{' '}
                            <a href="https://wordpress.org" hrefLang="en">
                                {t.footer.ecosystem.link}
                            </a>{' '}
                            {t.footer.ecosystem.after}
                        </>
                    }
                >
                    <LocaleSwitcher locale={locale} label={t.language} variant="list" />
                </SiteFooter>
            </Body>
        </html>
    );
}
