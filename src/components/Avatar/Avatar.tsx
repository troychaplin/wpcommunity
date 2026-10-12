import Image from 'next/image';
import { wpcTokens } from '../../styles/wpc-tokens';
import './styles.scss';

type AvatarSize = 'small' | 'medium' | 'large';

// The rendered sizes come from the layout tokens, so the image `sizes` hint and the CSS agree
const sizeTokens: Record<AvatarSize, string> = {
    small: wpcTokens.layout.avatarSmall,
    medium: wpcTokens.layout.avatarMedium,
    large: wpcTokens.layout.avatarLarge,
};

// First letters of the first two words: "Sophie L." → "SL", "Marie-Ange" → "MA"
const getInitials = (name: string) =>
    name
        .split(/[\s-]+/)
        .filter(Boolean)
        .slice(0, 2)
        .map((part) => part[0])
        .join('')
        .toUpperCase();

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
    name: string;
    src?: string;
    alt?: string;
    size?: AvatarSize;
    shape?: 'circle' | 'square';
}

export const Avatar = ({
    name,
    src,
    alt = '',
    size = 'medium',
    shape = 'circle',
    className,
    ...rest
}: AvatarProps) => {
    const classes = [
        'wpc-avatar',
        `wpc-avatar--${size}`,
        `wpc-avatar--${shape}`,
        src ? 'wpc-avatar--photo' : 'wpc-avatar--initials',
        className,
    ]
        .filter(Boolean)
        .join(' ');

    if (src) {
        return (
            <span className={classes} {...rest}>
                <Image className="wpc-avatar__image" src={src} alt={alt} fill sizes={sizeTokens[size]} />
            </span>
        );
    }

    // With no alt the initials are decorative, since the name is shown beside the avatar
    return (
        <span
            className={classes}
            role={alt ? 'img' : undefined}
            aria-label={alt || undefined}
            aria-hidden={alt ? undefined : true}
            {...rest}
        >
            {getInitials(name)}
        </span>
    );
};
