export type Figure = ICurrencyFigure;

export interface ICurrencyFigure {
    type: 'currency';
    value: number;
    created: Date;
    meta: {
        currency: '£'
    };
}

export interface IFigureDictionary {
    [index: string]: Figure;
}
