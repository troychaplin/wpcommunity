import { useI18n } from '@/i18n/useI18n';
import { NotFoundPage } from '../NotFoundPage';

// The :lang catch-all, for unknown paths under /en and /fr
export default function NotFound() {
    const { locale } = useI18n();

    return <NotFoundPage locale={locale} />;
}
