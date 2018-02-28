import * as React from 'react';
import { IPresentationDashboardComponentProps } from '../interfaces/PresentationDashboardComponent';
import { getCumulativeEntries } from '../utiltieis/entries';
import { renderPresentationWidget } from '../utiltieis/render';
import LabelledFigureComponent from './LabelledFigureComponent';

const PresentationDashboardComponent: React.SFC<IPresentationDashboardComponentProps> = ({
    entries
}) => {
    const cumulativeWidgets = getCumulativeEntries(entries);
    const renderedWidgets = Object.keys(cumulativeWidgets).map((label: string) => {
        return renderPresentationWidget(label, cumulativeWidgets[label]);
    });

    // Custom widget calculation example
    const totalMonths = () => {
        const value = cumulativeWidgets['target'].value / cumulativeWidgets['saving per month'].value;

        return (
            <LabelledFigureComponent label="Remaining months">
                <p>{ value }</p>
            </LabelledFigureComponent>
        );
    };

    return (
        <div className="presentation-dashboard">
            { renderedWidgets }
            <hr/>
            { totalMonths() }
        </div>
    );
};

export default PresentationDashboardComponent;
