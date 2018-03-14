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
