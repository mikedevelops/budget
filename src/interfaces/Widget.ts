export interface ICurrencyWidgetSchema {
    type: 'CURRENCY';
    value: 'INT';
    currency: 'STRING';
}

export interface ICurrencyWidget {
    type: string;
    currency: string;
    value: number;
}
