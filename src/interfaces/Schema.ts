export type EntrySchema = ICurrencyEntrySchema | IDateEntrySchema;

export interface ICurrencyEntrySchema {
    type: 'CURRENCY';
    value: 'INT';
    currency: ['£'];
    label: 'Currency';
    placeholder: string;
    name: string;
}

export interface IDateEntrySchema {
    type: 'DATE';
    value: 'DATE';
    label: 'Date';
    placeholder: string;
    name: string;
}
