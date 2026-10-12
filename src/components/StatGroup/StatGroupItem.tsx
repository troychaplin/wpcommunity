export interface StatGroupItemProps {
    value: React.ReactNode;
    label: string;
}

// The label comes first in the DOM, so a screen reader hears "Local Members, 1,200+"; CSS shows
// the value first.
export const StatGroupItem = ({ value, label }: StatGroupItemProps) => (
    <div className="wpc-stat-group__item">
        <dt className="wpc-stat-group__label">{label}</dt>
        <dd className="wpc-stat-group__value">{value}</dd>
    </div>
);

StatGroupItem.displayName = 'StatGroup.Item';
