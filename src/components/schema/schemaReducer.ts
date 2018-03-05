import { Reducer, AnyAction } from 'redux';
import { schema } from '../../schema/schema';
import { IUpdateSchemaAction } from './schemaActions';
import { EntrySchema } from '../../interfaces/Schema';

const defaultState: any = {
    schema,
    widgets: []
};

const schemaReducer: Reducer<any> = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case 'UPDATE_SCHEMA':
            const { formData } = action as IUpdateSchemaAction;
            const blueprint = schema.find((s) => s.type.toLowerCase() === formData.schema.toLowerCase());

            // TODO: Should this switch on formDate.schema and build widget objects

            if (blueprint === undefined) {
                throw new Error(`Could not find schema for "${formData.schema}"`);
            }

            const widget = Object.assign({}, blueprint, {
                name: formData[`${formData.schema}_name`]
            });

            Object.keys(widget).reduce((w: any, key: string) => {
                for (const dataKey in formData) {
                    if (formData.hasOwnProperty(dataKey)) {
                        const widgetKey = dataKey.split('_')[1];

                        if (w[widgetKey] !== undefined) {
                            w[widgetKey] = formData[dataKey];
                        }
                    }
                }

                return w;
            }, widget);

            return Object.assign({}, state, {
                widgets: [...state.widgets, widget]
            });
        default:
            return state;
    }
};

export default schemaReducer;
