import * as React from 'react';
import { AmountComponentPropsInterface } from '../interfaces/AmountComponent';

const Target: React.SFC<AmountComponentPropsInterface> = ({
    currency,
    value
}) => {
    return <p>{ currency }{ value }</p>
}

export default Target;
