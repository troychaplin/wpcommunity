import { defaultLocale, languageNames, locales } from '@/i18n/config';
import { i18nFor } from '@/i18n/useI18n';

// Sends / to the reader's language: the first browser language the site offers, else English.
// Runs inline, before hydration, so the reader never sees this page. Once the site is on
// Spacefast, Language= rules in _redirects will do this at the edge and this stays the fallback.
const pickLocale = `(function () {
    var offered = ${JSON.stringify(locales)};
    var preferred = navigator.languages || [navigator.language || ''];
    var locale = ${JSON.stringify(defaultLocale)};
    for (var i = 0; i < preferred.length; i++) {
        var language = String(preferred[i]).split('-')[0].toLowerCase();
        if (offered.indexOf(language) > -1) { locale = language; break; }
    }
    location.replace('/' + locale + location.search + location.hash);
})();`;

export default function LocaleRedirect() {
    const { t } = i18nFor(defaultLocale);

    return (
        <>
            <title>{t.meta.siteName}</title>
            <meta name="robots" content="noindex" />
            <script dangerouslySetInnerHTML={{ __html: pickLocale }} />
            <noscript>
                <meta httpEquiv="refresh" content={`0; url=/${defaultLocale}`} />
            </noscript>
            <main>
                <ul>
                    {locales.map((locale) => (
                        <li key={locale}>
                            <a href={`/${locale}`} hrefLang={locale} lang={locale}>
                                {languageNames[locale].label}
                            </a>
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
}
