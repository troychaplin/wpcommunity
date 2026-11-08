import type { Config } from '@react-router/dev/config';
import { getGroups } from './src/data';
import { locales } from './src/i18n/config';

// Every page is rendered to static HTML at build time; there is no runtime server
const localizedPaths = ['', '/groups', '/kitchen-sink', ...getGroups().map((group) => `/groups/${group.slug}`)];

export default {
    appDirectory: 'src/app',
    ssr: false,
    prerender: ['/', ...locales.flatMap((locale) => localizedPaths.map((path) => `/${locale}${path}`))],
} satisfies Config;
