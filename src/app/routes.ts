import { index, route } from '@react-router/dev/routes';
import type { RouteConfig } from '@react-router/dev/routes';

// Every page lives under /en or /fr. The paths to prerender are listed in react-router.config.ts.
export default [
    index('./routes/locale-redirect.tsx'),
    route(':lang', './routes/lang-layout.tsx', [
        index('./routes/home.tsx'),
        route('groups', './routes/groups.tsx'),
        route('groups/:slug', './routes/group.tsx'),
        route('kitchen-sink', './routes/kitchen-sink/kitchen-sink.tsx'),
        route('*', './routes/not-found.tsx'),
    ]),
] satisfies RouteConfig;
