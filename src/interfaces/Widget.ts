export type WidgetSchema = ICurrencyWidgetSchema | IDateWidgetSchema;

export interface ICurrencyWidgetSchema {
    type: 'CURRENCY';
    value: 'INT';
    currency: ['£'];
    label: 'Currency';
    placeholder: string;
    name: string;
}

export interface IDateWidgetSchema {
    type: 'DATE';
    value: 'DATE';
    label: 'Date';
    placeholder: string;
    name: string;
}

export interface IWidget {
    name: string;
    type: string;
    [index: string]: any;
}

export interface ICurrencyWidget {
    type: string;
    currency: string;
    value: number;
    name: string;
}
