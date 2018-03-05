import { ICurrencyEntrySchema } from '../interfaces/Schema';

export const currencyEntrySchema: ICurrencyEntrySchema = {
    type: 'CURRENCY',
    value: 'INT',
    currency: ['£'],
    label: 'Currency',
    placeholder: '0.00',
    name: ''
};
