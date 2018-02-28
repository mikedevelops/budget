import * as React from 'react';
import { Figure, ICurrencyFigure } from '../interfaces/Figure';
import LabelledFigureComponent from '../components/LabelledFigureComponent';
import AmountComponent from '../components/AmountComponent';

export function renderCurrencyWidget (
    label: string,
    entry: ICurrencyFigure
): JSX.Element {
    return (
        <div key={label} className="widget widget--currency">
            <LabelledFigureComponent label={label}>
                <AmountComponent value={entry.value} currency={entry.meta.currency}/>
            </LabelledFigureComponent>
        </div>
    );
}

export function renderPresentationWidget (
    label: string,
    entry: Figure
): JSX.Element {
    if (entry.type === 'currency') {
        return renderCurrencyWidget(label, entry);
    }
}
