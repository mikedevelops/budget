import * as React from 'react';
import { ILabelledFigureComponentProps } from './LabelledFigureComponentInterface';

const LabelledFigureComponent: React.SFC<ILabelledFigureComponentProps> = ({
    label,
    children
}) => {
    return (
        <div className="labelled-figure">
            <div className="labelled-figure__label">
                <p>{ label }</p>
            </div>
            { children }
        </div>
    );
};

export default LabelledFigureComponent;
