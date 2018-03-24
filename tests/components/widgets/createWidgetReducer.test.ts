import { createWidgetAction, CREATE_WIDGET } from '../../../src/components/widgets/createWidgetActions';
import createWidgetReducer from '../../../src/components/widgets/createWidgetReducer';
import { AnyAction } from 'redux';
import { ICurrencyWidgetSchema } from '../../../src/interfaces/Schema';
import { ICurrencyWidget, WidgetSchema } from '../../../src/interfaces/Widget';

describe('createWidgetReducer', () => {
    let state: any;
    let schema: any;

    beforeEach(() => {
        schema = [
            {
                type: 'TEST',
                value: 'STRING',
                label: 'Currency',
                placeholder: 'test widget',
                name: 'my test widget'
            }
        ];

        state = {
            schema,
            widgets: []
        };
    });

    describe(CREATE_WIDGET, () => {
        test('should throw an error if the payload does not have a widget', () => {
            const action: AnyAction = createWidgetAction({});

            expect(() => createWidgetReducer(state, action)).toThrowErrorMatchingSnapshot();
        });

        test('should throw an error if the payload widget does not have a blueprint', () => {
            const action: AnyAction = createWidgetAction({
                widget: 'A_WIDGET_THAT_DOES_NOT_EXIST',
                A_WIDGET_THAT_DOES_NOT_EXIST_name: 'a widget that will never exist. maybe.'
            });

            expect(() => createWidgetReducer(state, action)).toThrowErrorMatchingSnapshot();
        });

        test('should insert a new widget to the state', () => {
            const action: AnyAction = createWidgetAction({
                Test_name: 'test widget',
                Test_currency: '$',
                Test_value: 666,
                widget: 'Test'
            });

            const widget: ICurrencyWidget = {
                name: 'test widget',
                type: 'Test',
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
