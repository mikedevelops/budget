import * as React from 'react';
import { IHistoryComponentProps } from './HistoryComponentInterface';
import HistoryEntryComponent from './HistoryEntryComponent';
import { IFigureDictionary } from '../../interfaces/Figure';

const HistoryComponent: React.SFC<IHistoryComponentProps> = ({
    entries
}) => {
    const entryGroups = entries.map((entry: IFigureDictionary) => {
        const key = entry[Object.keys(entry)[0]].created.getDate();

        return (
            <div key={key} className="history-entry-group">
                <hr/>
                { Object.keys(entry).map((label: string) => {
                        return (
                            <HistoryEntryComponent
                                key={label}
                                label={label}
                                type={entry[label].type}
                                value={entry[label].value}
                                created={entry[label].created.toISOString()}
                            />
                        );
                    })
                }
            </div>
        );
    });

    return (
        <div className="history">
            <h1>History</h1>
            { entryGroups }
        </div>
    );
};

export default HistoryComponent;
