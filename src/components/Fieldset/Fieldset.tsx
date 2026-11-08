import './styles.scss';

export interface FieldsetProps extends React.FieldsetHTMLAttributes<HTMLFieldSetElement> {
    legend: string;
    children: React.ReactNode;
}

export const Fieldset = ({ legend, children, className, ...rest }: FieldsetProps) => {
    const classes = ['wpc-fieldset', className].filter(Boolean).join(' ');

    return (
        <fieldset className={classes} {...rest}>
            <legend className="wpc-fieldset__legend">{legend}</legend>
            <div className="wpc-fieldset__body">{children}</div>
        </fieldset>
    );
};
