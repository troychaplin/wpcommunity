import { Card } from '../Card';
import { FlexGroup } from '../FlexGroup';
import { Heading } from '../Heading';
import { Pill } from '../Pill';
import { StatGroup } from '../StatGroup';
import { TextLink } from '../TextLink';
import './styles.scss';

export interface GroupHeaderChannel {
    label: string;
    href: string;
}

export interface GroupHeaderStat {
    value: string;
    label: string;
}

export interface GroupHeaderProps {
    region: string;
    status?: string;
    channel?: GroupHeaderChannel;
    title: string;
    description?: React.ReactNode;
    stats?: GroupHeaderStat[];
    className?: string;
}

export const GroupHeader = ({
    region,
    status,
    channel,
    title,
    description,
    stats,
    className,
}: GroupHeaderProps) => {
    const classes = ['wpc-group-header', className].filter(Boolean).join(' ');

    return (
        <Card as="header" shadow className={classes}>
            <FlexGroup justify="space-between" align="center" gap="small" className="wpc-group-header__bar">
                <Pill variant="region">{region}</Pill>
                {(status || channel) && (
                    <FlexGroup align="center" gap="small">
                        {status && <Pill variant="status">{status}</Pill>}
                        {channel && (
                            <TextLink href={channel.href} font="mono" size="small">
                                {channel.label}
                            </TextLink>
                        )}
                    </FlexGroup>
                )}
            </FlexGroup>
            <Heading as="h1" size="heading-large">
                {title}
            </Heading>
            {description && <p className="wpc-group-header__description">{description}</p>}
            {stats && stats.length > 0 && (
                <Card backgroundColor="sage" borderRadius="md" paddingInline="medium" paddingBlock="medium">
                    <StatGroup>
                        {stats.map(({ value, label }) => (
                            <StatGroup.Item key={label} value={value} label={label} />
                        ))}
                    </StatGroup>
                </Card>
            )}
        </Card>
    );
};
