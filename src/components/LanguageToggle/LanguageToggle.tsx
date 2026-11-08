import { Link } from '../LinkProvider';
import './styles.scss';

export interface LanguageOption {
    code: string;
    label: string;
    shortLabel?: string;
    href: string;
    isCurrent?: boolean;
}

export interface LanguageToggleProps {
    languages: LanguageOption[];
    variant?: 'segmented' | 'list';
    label?: string;
    className?: string;
}

export const LanguageToggle = ({
    languages,
    variant = 'segmented',
    label = 'Language',
    className,
}: LanguageToggleProps) => {
    const classes = ['wpc-language-toggle', `wpc-language-toggle--${variant}`, className]
        .filter(Boolean)
        .join(' ');

    return (
        <nav className={classes} aria-label={label}>
            {variant === 'list' && (
                <p className="wpc-language-toggle__label" aria-hidden="true">
                    {label}
                </p>
            )}
            <ul className="wpc-language-toggle__list">
                {languages.map(({ code, label: languageLabel, shortLabel, href, isCurrent }) => (
                    <li key={code}>
                        <Link
                            href={href}
                            hrefLang={code}
                            lang={code}
                            aria-current={isCurrent ? 'true' : undefined}
                            className={
                                isCurrent
                                    ? 'wpc-language-toggle__link wpc-language-toggle__link--current'
                                    : 'wpc-language-toggle__link'
                            }
                        >
                            {variant === 'segmented' ? (
                                <>
                                    <span aria-hidden="true">{shortLabel ?? code}</span>
                                    <span className="sr-only">{languageLabel}</span>
                                </>
                            ) : (
                                languageLabel
                            )}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
