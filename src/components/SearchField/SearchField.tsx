import { TextField } from '../TextField';
import type { TextFieldProps } from '../TextField';
import './styles.scss';

export interface SearchFieldProps extends Omit<TextFieldProps, 'type' | 'icon' | 'hideLabel' | 'label'> {
    label?: string;
}

// The label is visually hidden; the search icon and placeholder carry the meaning on screen
export const SearchField = ({ label = 'Search', className, ...rest }: SearchFieldProps) => {
    const classes = ['wpc-search-field', className].filter(Boolean).join(' ');

    return <TextField type="search" icon="search" hideLabel label={label} className={classes} {...rest} />;
};
