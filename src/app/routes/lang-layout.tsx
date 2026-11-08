import { Outlet, useLocation, useParams } from 'react-router';
import { SiteFooter } from '@/components/SiteFooter';
import { SiteHeader } from '@/components/SiteHeader';
import { SkipLink } from '@/components/SkipLink';
import { LocaleSwitcher } from '@/features/locale/LocaleSwitcher';
import { defaultLocale, hasLocale } from '@/i18n/config';
import { useI18n } from '@/i18n/useI18n';
import { NotFoundPage } from '../NotFoundPage';

export default function LangLayout() {
    const { lang } = useParams();
    const { locale, t } = useI18n();
    const { pathname } = useLocation();

    // Anything outside /en and /fr. This can't be a loader: with ssr:false a parent route's loader
    // needs every child path prerendered, and the catch-all isn't. Only development reaches this;
    // the static host answers unknown paths with its own 404.
    if (!lang || !hasLocale(lang)) {
        return <NotFoundPage locale={defaultLocale} />;
    }

    return (
        <>
            <SkipLink>{t.skipLink}</SkipLink>
            <SiteHeader
                homeHref={`/${locale}`}
                currentPath={pathname}
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
            <Outlet />
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
                <LocaleSwitcher locale={locale} label={t.language} navLabel={t.footer.languageNavLabel} variant="list" />
            </SiteFooter>
        </>
    );
}
