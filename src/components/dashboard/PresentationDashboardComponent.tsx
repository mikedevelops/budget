import * as React from 'react';
import { IPresentationDashboardComponentProps } from './PresentationDashboardComponentInterface';
import { getCumulativeEntries } from '../../utiltieis/entries';
import { renderPresentationWidget } from '../../utiltieis/render';
import LabelledFigureComponent from '../figure/LabelledFigureComponent';

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
            <h1>Presentation Dashboard</h1>
            { renderedWidgets }
            <hr/>
            <h1>Custom Widgets</h1>
            { totalMonths() }
        </div>
    );
};

export default PresentationDashboardComponent;
