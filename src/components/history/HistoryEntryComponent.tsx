import * as React from 'react';
import { IHistoryEntryComponentProps } from './HistoryEntryComponentInterface';

const HistoryEntryComponent: React.SFC<IHistoryEntryComponentProps> = ({
    label,
    type,
    value,
    created
}) => {
    return (
        <div className="history-entry">
            <p className="history-entry__label">{ label }</p>
            <p className="history-entry__type">{ type }</p>
            <p className="history-entry__value">{ value }</p>
            <p className="history-entry__created">{ created }</p>
        </div>
    );
};

export default HistoryEntryComponent;
