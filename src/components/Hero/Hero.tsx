import Image from 'next/image';
import { Heading } from '../Heading';
import './styles.scss';

export interface HeroImage {
    src: string;
    alt?: string;
}

export interface HeroProps {
    title: string;
    accent?: string;
    lead?: React.ReactNode;
    actions?: React.ReactNode;
    aside?: React.ReactNode;
    image?: HeroImage;
    className?: string;
}

// The content comes first in the DOM so phones read the heading before the aside; above the
// tablet breakpoint the grid places the aside on the left, as in the design.
export const Hero = ({ title, accent, lead, actions, aside, image, className }: HeroProps) => {
    const classes = ['wpc-hero', 'alignfull', aside && 'wpc-hero--has-aside', className]
        .filter(Boolean)
        .join(' ');

    return (
        <section className={classes}>
            <div className="wpc-hero__content">
                {image && (
                    <>
                        <Image
                            className="wpc-hero__image"
                            src={image.src}
                            alt={image.alt ?? ''}
                            fill
                            sizes="70vw"
                            priority
                        />
                        <span className="wpc-hero__wash" aria-hidden="true" />
                    </>
                )}
                <div className="wpc-hero__body">
                    <Heading as="h1" size="display" accent={accent}>
                        {title}
                    </Heading>
                    {lead && <p className="wpc-hero__lead">{lead}</p>}
                    {actions && <div className="wpc-hero__actions">{actions}</div>}
                </div>
            </div>
            {aside && <div className="wpc-hero__aside">{aside}</div>}
        </section>
    );
};
