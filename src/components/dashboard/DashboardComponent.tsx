import * as React from 'react';
import { IDashboardComponentProps } from './DashboardComponentInterface';
import PresentationDashboardComponent from './PresentationDashboardComponent';

const DashboardComponent: React.SFC<IDashboardComponentProps> = ({
    entries
}) => {
    return (
        <div className="dashboard">
            <PresentationDashboardComponent entries={entries} />;
        </div>
    );
};

export default DashboardComponent;
