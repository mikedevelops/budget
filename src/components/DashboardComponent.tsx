import * as React from 'react';
import { IDashboardComponentProps } from '../interfaces/DashboardComponent';
import PresentationDashboardComponent from './PresentationDashboardComponent';

const DashboardComponent: React.SFC<IDashboardComponentProps> = ({
    mode,
    entries
}) => {
    let dashboard;

    switch (mode) {
        case 'presentation':
            dashboard = <PresentationDashboardComponent
                entries={entries}
            />;
    }

    return (
        <div className="dashboard">
            { dashboard }
        </div>
    );
};

export default DashboardComponent;
