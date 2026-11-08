import { UpdateListItem } from './UpdateListItem';
import './styles.scss';

export interface UpdateListProps extends React.HTMLAttributes<HTMLUListElement> {
    children: React.ReactNode;
}

// role="list" restores list semantics that Safari drops once list-style is removed
export const UpdateListWrapper = ({ children, className, ...rest }: UpdateListProps) => {
    const classes = ['wpc-update-list', className].filter(Boolean).join(' ');

    return (
        <ul role="list" className={classes} {...rest}>
            {children}
        </ul>
    );
};

export const UpdateList = Object.assign(UpdateListWrapper, {
    Item: UpdateListItem,
});

UpdateListWrapper.displayName = 'UpdateList';
