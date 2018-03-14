import {
    ICreateWidgetAction,
    createWidgetAction
} from '../../../src/components/widgets/createWidgetActions';
import createWidgetReducer from '../../../src/components/widgets/createWidgetReducer';
import { AnyAction } from 'redux';
import { ICurrencyWidgetSchema } from '../../../src/interfaces/Schema';
import { ICurrencyWidget } from '../../../src/interfaces/Widget';

describe('createWidgetReducer', () => {
    let state: any;

    beforeEach(() => {
        state = {
            schema: [
                {
                    type: 'CURRENCY',
                    value: 'INT',
                    currency: ['£'],
                    label: 'Currency',
                    placeholder: '0.00',
                    name: ''
                }
            ],
            widgets: []
        };
    });

    describe('UPDATE_SCHEMA', () => {
        test('should throw an error if the schema does not have a blueprint', () => {
            const action: AnyAction = {
                type: 'A_SCHEMA_THAT_DOES_NOT_EXIST'
            };

            expect(createWidgetReducer(state, action)).toThrowErrorMatchingSnapshot();
        });

        test('should insert a new widget to the state', () => {
            const action: ICreateWidgetAction = createWidgetAction({
                schema: 'CURRENCY',
                foo: 'bar'
            });

            const widget: ICurrencyWidget = {
                type: 'CURRENCY',
                currency: '$',
                value: 666
            };

            expect(createWidgetReducer(state, action)).toEqual({
                schema: state.schema,
                widgets: [widget]
            });
        });
    });
});
