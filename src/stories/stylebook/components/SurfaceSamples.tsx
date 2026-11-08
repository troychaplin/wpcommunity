import { useEffect, useRef, useState } from 'react';
import config from '../../../../c2b.config.json';
import { Button } from '../../../components/Button';
import { ButtonGroup } from '../../../components/ButtonGroup';
import { Card } from '../../../components/Card';
import { Eyebrow } from '../../../components/Eyebrow';
import { Heading } from '../../../components/Heading';
import { surfaceClasses } from '../../../utils/propClasses';
import '../stylebook.css';

type SurfaceName = keyof typeof surfaceClasses;

const surfaces = Object.keys(surfaceClasses) as SurfaceName[];

// Hex value → palette step, to name the colours a rendered surface resolves to
const stepByHex = new Map(
    Object.entries(config.tokens.color).flatMap(([name, value]) => {
        const raw = typeof value === 'string' ? value : value.value;
        return raw.startsWith('#') ? [[raw.toLowerCase(), name] as const] : [];
    }),
);

const toHex = (rgb: string) => {
    const channels = rgb.match(/\d+(\.\d+)?/g)?.slice(0, 3).map(Number);
    return channels ? `#${channels.map((c) => Math.round(c).toString(16).padStart(2, '0')).join('')}` : rgb;
};

const pairing = [
    ['Fill', '--wpc-surface-fill'],
    ['Border', '--wpc-surface-border'],
    ['Hover border', '--wpc-surface-hover-border'],
    ['Hover fill', '--wpc-surface-hover-fill'],
] as const;

// A linked Card in the surface, with the pairing it actually resolves to in the browser, so the
// page can't drift from src/styles/mixins/_surfaces.scss
function SurfaceSample({ name }: { name: SurfaceName }) {
    const ref = useRef<HTMLLIElement>(null);
    const [steps, setSteps] = useState<string[]>([]);

    useEffect(() => {
        const card = ref.current?.querySelector('.wpc-card');
        if (!card) return;

        const probe = document.createElement('span');
        card.append(probe);
        setSteps(
            pairing.map(([, property]) => {
                probe.style.color = `var(${property})`;
                const hex = toHex(getComputedStyle(probe).color);
                return stepByHex.get(hex) ?? hex;
            }),
        );
        probe.remove();
    }, []);

    return (
        <li ref={ref} className="sb-surface">
            <Card backgroundColor={name} href="#surfaces" paddingInline="medium" paddingBlock="medium">
                <Eyebrow tone="accent">{name}</Eyebrow>
                <Heading as="p" size="large">
                    Hover this card
                </Heading>
                <p>Body text in the surface&apos;s tone.</p>
            </Card>
            <dl className="sb-surface__pairing">
                {pairing.map(([label], index) => (
                    <div key={label}>
                        <dt>{label}</dt>
                        <dd>
                            <code>{steps[index] ?? '…'}</code>
                        </dd>
                    </div>
                ))}
            </dl>
        </li>
    );
}

export function SurfaceSamples({ title, description }: { title?: string; description?: string }) {
    return (
        <section className="sb-section">
            {(title || description) && (
                <header className="sb-header">
                    {title && <h2>{title}</h2>}
                    {description && <p>{description}</p>}
                </header>
            )}
            <ul className="sb-surface-grid">
                {surfaces.map((name) => (
                    <SurfaceSample key={name} name={name} />
                ))}
            </ul>
        </section>
    );
}

// Button takes the surfaces that make sense as a button, plus the inverse outline for dark bands
export function SurfaceButtons({ title, description }: { title?: string; description?: string }) {
    return (
        <section className="sb-section">
            {(title || description) && (
                <header className="sb-header">
                    {title && <h2>{title}</h2>}
                    {description && <p>{description}</p>}
                </header>
            )}
            <div className="sb-surface-buttons">
                <ButtonGroup>
                    <Button text="crimson" />
                    <Button text="white" color="white" />
                    <Button text="forest" color="forest" />
                </ButtonGroup>
                <Card backgroundColor="forest" border={false} paddingInline="medium" paddingBlock="medium">
                    <ButtonGroup>
                        <Button text="crimson" />
                        <Button text="inverse" color="inverse" />
                    </ButtonGroup>
                </Card>
            </div>
        </section>
    );
}
