import { Eyebrow } from '../Eyebrow';
import { Heading } from '../Heading';
import { Pill } from '../Pill';
import { TextLink } from '../TextLink';

export interface UpdateListItemProps {
    date: string;
    dateTime: string;
    category: string;
    title: string;
    excerpt: React.ReactNode;
    href: string;
    linkText: string;
    headingLevel?: 2 | 3 | 4;
}

export const UpdateListItem = ({
    date,
    dateTime,
    category,
    title,
    excerpt,
    href,
    linkText,
    headingLevel = 3,
}: UpdateListItemProps) => {
    const titleTag = `h${headingLevel}` as const;

    return (
        <li className="wpc-update-list__item">
            <div className="wpc-update-list__meta">
                <Eyebrow as="time" dateTime={dateTime}>
                    {date}
                </Eyebrow>
                <Pill>{category}</Pill>
            </div>
            <div className="wpc-update-list__content">
                <Heading as={titleTag} size="2x-large">
                    {title}
                </Heading>
                <p className="wpc-update-list__excerpt">{excerpt}</p>
                <TextLink href={href} aria-label={`${linkText}, ${title}`}>
                    {linkText}
                </TextLink>
            </div>
        </li>
    );
};

UpdateListItem.displayName = 'UpdateList.Item';
