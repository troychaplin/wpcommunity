import react from '@vitejs/plugin-react';
import type { StorybookConfig } from '@storybook/react-vite';
import remarkGfm from 'remark-gfm';
import type { PluginOption } from 'vite';

// Storybook loads the project's vite.config.ts. React Router's plugin is for the app only: it
// expects src/app/root.tsx to own the page, which breaks Storybook's preview, so it's swapped for
// the plain React plugin. The `@/` alias (resolve.tsconfigPaths) carries over.
const isReactRouterPlugin = (plugin: PluginOption) =>
    !!plugin && typeof plugin === 'object' && 'name' in plugin && plugin.name.startsWith('react-router');

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(ts|tsx)'],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                mdxPluginOptions: {
                    mdxCompileOptions: {
                        remarkPlugins: [remarkGfm],
                    },
                },
            },
        },
        '@storybook/addon-a11y',
        '@storybook/addon-mcp',
    ],
    staticDirs: ['../public'],
    framework: '@storybook/react-vite',
    typescript: {
        reactDocgen: 'react-docgen-typescript',
    },
    viteFinal: async (config) => {
        const plugins = (config.plugins ?? []).flat(Infinity as 1) as PluginOption[];
        config.plugins = [...plugins.filter((plugin) => !isReactRouterPlugin(plugin)), react()];

        // staticDirs already copies public/. Vite's own publicDir copy writes the same files at the
        // same time, and the race can fail the build with EEXIST.
        config.publicDir = false;

        // GitHub Pages serves the build from /<repo>/; the deploy workflow sets this
        if (process.env.STORYBOOK_BASE_PATH) {
            config.base = process.env.STORYBOOK_BASE_PATH;
        }

        return config;
    },
};

export default config;
