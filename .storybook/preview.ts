import type { Preview } from '@storybook/react-vite';
import '../src/styles/fonts';
import '../src/styles/main.scss';

// Shows `<Component … />` in the docs source panel instead of the whole `{ render: () => … }`
// story object, for stories written with a render function
const unwrapRender = (code: string): string => {
    if (!code) return code;
    const match = code.match(/^\s*\{[\s\S]*?render:\s*\(?[\w,\s]*\)?\s*=>\s*([\s\S]+?)\s*,?\s*\}\s*$/);
    if (!match) return code;
    let inner = match[1].trim();
    if (inner.startsWith('(') && inner.endsWith(')')) {
        inner = inner.slice(1, -1).trim();
    }
    const lines = inner.split('\n');
    const indents = lines.filter((line) => line.trim()).map((line) => line.match(/^ */)?.[0].length ?? 0);
    const minIndent = indents.length ? Math.min(...indents) : 0;
    return lines
        .map((line) => line.slice(minIndent))
        .join('\n')
        .trim();
};

const preview: Preview = {
    tags: ['autodocs'],
    parameters: {
        layout: 'padded',
        controls: {
            expanded: true,
            sort: 'requiredFirst',
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        a11y: {
            // Report violations in the a11y panel without failing; raise to 'error' once a11y tests
            // run in CI
            test: 'todo',
        },
        docs: {
            source: {
                transform: unwrapRender,
            },
        },
        options: {
            // Follows the inventory in docs/components/README.md
            storySort: {
                order: ['Introduction', 'Foundations', 'Page Structure', 'Layout', 'Content', 'Sections', '*'],
            },
        },
    },
};

export default preview;
