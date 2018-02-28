export type Figure = ICurrencyFigure;

export interface ICurrencyFigure {
    type: 'currency';
    value: number;
    meta: {
        currency: '£'
    };
}

export interface IFigureDictionary {
    [index: string]: Figure;
}
