import * as React from 'react';
import { DashboardComponentProps } from '../interfaces/DashboardComponent';
import Target from './AmountComponent';

const DashboardComponent: React.SFC<DashboardComponentProps> = ({
    targetValue,
    targetCurrency
}) => {
    return (
        <div className="dashboard">
            <pre>Target</pre><Target currency={targetCurrency} value={targetValue}/>
        </div>
    );
}

export default DashboardComponent;
