import { Avatar } from '../Avatar';
import { Card } from '../Card';
import { Eyebrow } from '../Eyebrow';
import { StatGroup } from '../StatGroup';
import './styles.scss';

export interface ChatPreviewMessage {
    author: string;
    time: string;
    text: string;
}

export interface ChatPreviewStat {
    value: string;
    label: string;
}

export interface ChatPreviewProps {
    channel: string;
    messages: ChatPreviewMessage[];
    stats?: ChatPreviewStat[];
    label?: string;
    className?: string;
}

export const ChatPreview = ({ channel, messages, stats, label, className }: ChatPreviewProps) => {
    const classes = ['wpc-chat-preview', className].filter(Boolean).join(' ');

    return (
        <figure className={classes} aria-label={label ?? `Preview of the #${channel} Slack channel`}>
            <Card borderRadius="md" paddingInline="none" paddingBlock="none" className="wpc-chat-preview__card">
                <p className="wpc-chat-preview__channel">
                    <span className="wpc-chat-preview__hash" aria-hidden="true">
                        #
                    </span>{' '}
                    {channel}
                </p>
                <ol className="wpc-chat-preview__messages">
                    {messages.map(({ author, time, text }) => (
                        <li key={`${author}-${time}`} className="wpc-chat-preview__message">
                            <Avatar name={author} size="small" shape="square" />
                            <div className="wpc-chat-preview__body">
                                <p className="wpc-chat-preview__meta">
                                    <span className="wpc-chat-preview__author">{author}</span>{' '}
                                    <Eyebrow as="span">{time}</Eyebrow>
                                </p>
                                <p className="wpc-chat-preview__text">{text}</p>
                            </div>
                        </li>
                    ))}
                </ol>
                {stats && stats.length > 0 && (
                    <div className="wpc-chat-preview__footer">
                        <StatGroup variant="mono">
                            {stats.map(({ value, label }) => (
                                <StatGroup.Item key={label} value={value} label={label} />
                            ))}
                        </StatGroup>
                    </div>
                )}
            </Card>
        </figure>
    );
};
