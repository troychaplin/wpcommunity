import { Eyebrow } from '../Eyebrow';
import { Link } from '../LinkProvider';
import './styles.scss';

export interface MeetupIndexRegion {
    label: string;
    count: number;
    href?: string;
}

export interface MeetupIndexMeta {
    label: string;
    value: string;
}

export interface MeetupIndexProps {
    title?: string;
    version?: string;
    search?: React.ReactNode;
    regions: MeetupIndexRegion[];
    meta?: MeetupIndexMeta[];
    countLabel?: (count: number) => string;
    className?: string;
}

export const MeetupIndex = ({
    title = 'Meetup Index',
    version,
    search,
    regions,
    meta,
    countLabel = (count) => `${count} ${count === 1 ? 'group' : 'groups'}`,
    className,
}: MeetupIndexProps) => {
    const classes = ['wpc-meetup-index', className].filter(Boolean).join(' ');

    return (
        <section className={classes} aria-label={title}>
            <div className="wpc-meetup-index__header">
                <p className="wpc-meetup-index__title">{title}</p>
                {version && <Eyebrow as="span">{version}</Eyebrow>}
            </div>
            {search}
            <ul className="wpc-meetup-index__regions">
                {regions.map(({ label, count, href }) => {
                    const row = (
                        <>
                            <span className="wpc-meetup-index__name">{label}</span>
                            <span className="wpc-meetup-index__leader" aria-hidden="true" />
                            <span className="wpc-meetup-index__count">{countLabel(count)}</span>
                        </>
                    );

                    // In-page fragments use a plain anchor so the browser fires `hashchange`,
                    // which the router's own hash navigation does not
                    return (
                        <li key={label}>
                            {href?.startsWith('#') ? (
                                <a href={href} className="wpc-meetup-index__region">
                                    {row}
                                </a>
                            ) : href ? (
                                <Link href={href} className="wpc-meetup-index__region">
                                    {row}
                                </Link>
                            ) : (
                                <span className="wpc-meetup-index__region">{row}</span>
                            )}
                        </li>
                    );
                })}
            </ul>
            {meta && meta.length > 0 && (
                <dl className="wpc-meetup-index__meta">
                    {meta.map(({ label, value }) => (
                        <div key={label} className="wpc-meetup-index__meta-row">
                            <dt>{label}</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
            )}
        </section>
    );
};
