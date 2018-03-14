import { Reducer, AnyAction } from 'redux';
import { schema } from '../../schema/schema';
import { ICreateWidgetAction } from './createWidgetActions';
import { WidgetSchema } from '../../interfaces/Schema';

const defaultState: any = {
    schema,
    widgets: []
};

// MEGA TODO: Create functions for creating widet objects form widget schema

const createWidgetReducer: Reducer<any> = (state: any = defaultState, action: any) => {
    switch (action.type) {
        case 'CREATE_WIDGET':
            const { formData } = action as ICreateWidgetAction;

            // TODO: Should we validate these props are available

            const blueprint = state.schema.find((s: WidgetSchema) =>
                s.type.toLowerCase() === formData.schema.toLowerCase());

            // TODO: Should this switch on formDate.schema and build widget objects

            if (blueprint === undefined) {
                throw new Error(`Could not find schema for "${formData.schema}"`);
            }

            // TODO: Widget objects should be built functionaly

            const widget = Object.assign({}, blueprint, {
                name: formData[`${formData.schema}_name`]
            });

            // TODO: factor this out of the reducer

            Object.keys(widget).reduce((w: any, key: string) => {
                for (const dataKey in formData) {
                    if (formData.hasOwnProperty(dataKey)) {
                        const widgetKey = dataKey.split('_')[1];

                        if (w[widgetKey] !== undefined) {
                            w[widgetKey] = formData[dataKey];
                        }
                    } else {
                        console.warn(`Form data for "${widget}" contains data "${key}" that does not exist in schema`);
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

export default createWidgetReducer;
