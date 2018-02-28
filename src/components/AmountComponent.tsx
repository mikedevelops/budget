import * as React from 'react';
import { IAmountComponentPropsInterface } from '../interfaces/AmountComponent';

const AmountComponent: React.SFC<IAmountComponentPropsInterface> = ({
    currency,
    value
}) => {
    return <p className="amount">{ currency }{ value }</p>;
};

export default AmountComponent;
