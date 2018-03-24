import { Reducer, AnyAction } from 'redux';
import { schema } from '../../schema/schema';
import { CREATE_WIDGET } from './createWidgetActions';
import { WidgetSchema } from '../../interfaces/Schema';
import { createWidgetFromSchema } from './createWidgetUtilities';

const defaultState: any = {
    schema,
    widgets: []
};

const createWidgetReducer: Reducer<any> = (state: any = defaultState, action: AnyAction) => {
    const { payload, type } = action;

    switch (type) {
        case CREATE_WIDGET:
            // TODO: Should we validate more props that are available?
            if (payload.data.widget === undefined) {
                throw new Error(`"${CREATE_WIDGET}" payload must contain a "widget" property`);
            }

            const blueprint = state.schema.find((s: WidgetSchema) =>
                s.type.toLowerCase() === payload.data.widget.toLowerCase());

            if (blueprint === undefined) {
                throw new Error(`Could not find schema for "${payload.data.widget}"`);
            }

            const widget = createWidgetFromSchema(blueprint, payload.data);

            return Object.assign({}, state, {
                widgets: [...state.widgets, widget]
            });
        default:
            return state;
    }
};

export default createWidgetReducer;
