import { reactRouter } from '@react-router/dev/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [reactRouter()],
    // Resolves the `@/*` alias from tsconfig.json
    resolve: { tsconfigPaths: true },
});
