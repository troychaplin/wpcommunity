import config from '../../../../c2b.config.json';
import '../stylebook.css';

const prefix = config.prefix;
const colors = config.tokens.color;
const gradients = config.tokens.gradient;

type SwatchEntry = {
    name: string;
    preview: string; // hex value, var() reference or gradient string — set as the swatch background
    cssVar: string;
    displayValue?: string; // value to show below; undefined for gradients
};

// Palette colours hold a literal value. Role colours point at a palette colour with
// var(--wpc--color-…), and each tone re-declares them.
type ColorKind = 'palette' | 'roles';

const rolePattern = new RegExp(`^var\\(--${prefix}--color-([a-z0-9-]+)\\)$`);

function parseColors(names?: string[], kind?: ColorKind, family?: string): SwatchEntry[] {
    const entries = Object.entries(colors).flatMap(([name, value]) => {
        const raw = typeof value === 'string' ? value : value.value;
        const target = raw.match(rolePattern)?.[1];

        if ((kind === 'palette' && target) || (kind === 'roles' && !target)) {
            return [];
        }

        // A family is the palette steps named {family}-{step}: crimson-100 … crimson-700
        if (family && (target || !name.startsWith(`${family}-`))) {
            return [];
        }

        return [
            {
                name,
                preview: raw,
                cssVar: `--${prefix}--color-${name}`,
                displayValue: target ? `→ ${target}` : raw,
            },
        ];
    });

    if (!names) return entries;

    return names.reduce<SwatchEntry[]>((acc, n) => {
        const entry = entries.find((e) => e.name === n);
        if (entry) acc.push(entry);
        return acc;
    }, []);
}

// c2b names gradient custom properties after the token, not its WordPress slug
function parseGradients(): SwatchEntry[] {
    return Object.entries(gradients).map(([name, def]) => ({
        name,
        preview: def.value,
        cssVar: `--${prefix}--gradient-${name}`,
    }));
}

type ColorSwatchesProps = {
    gradient?: boolean;
    /** Show only palette colours or only role colours. Ignored with `names`. */
    kind?: ColorKind;
    /** Show one palette family's steps (crimson, forest, sage, stone). Ignored with `names`. */
    family?: string;
    names?: string[];
    title?: string;
    description?: string;
};

export function ColorSwatches({ gradient, kind, family, names, title, description }: ColorSwatchesProps) {
    const entries = gradient
        ? parseGradients()
        : parseColors(names, names ? undefined : kind, names ? undefined : family);

    return (
        <section className="sb-section">
            {(title || description) && (
                <header className="sb-header">
                    {title && <h2>{title}</h2>}
                    {description && <p>{description}</p>}
                </header>
            )}
            <div className="sb-grid">
                {entries.map((entry) => (
                    <div key={entry.name} className="sb-swatch">
                        <div className="sb-swatch__color" style={{ background: entry.preview }} />
                        <strong className="sb-swatch__name">{entry.name}</strong>
                        <code className="sb-swatch__var">{entry.cssVar}</code>
                        {entry.displayValue && (
                            <span className="sb-swatch__value">{entry.displayValue}</span>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
