import * as React from 'react';
import { ICurrencyFigure } from '../../interfaces/Figure';

export function renderCurrencyInput (
    label: string,
    currency: ICurrencyFigure
): JSX.Element {
    return (
        <div key={label} className="control">
            <label className="label">{ label }</label>
            <span className="input-prefix">{ currency.meta.currency }</span>
            <input name={label} className="input input--numbers" type="number"/>
        </div>
    );
}
