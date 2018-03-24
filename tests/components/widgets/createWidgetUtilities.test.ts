import { ICurrencyWidgetSchema } from '../../../src/interfaces/Widget';
import { createWidgetFromSchema } from '../../../src/components/widgets/createWidgetUtilities';
import { currencyWidgetSchema } from '../../../src/schema/currencyWidgetSchema';

describe('createWidgetUtilities', () => {
    describe('createWidgetFromSchema', () => {
        test('should add a widget name', () => {
            const widget = createWidgetFromSchema(currencyWidgetSchema, {
                currency_name: 'foo'
            });

            expect(widget.name).toEqual('foo');
        });

        test('should add a widget type', () => {
            const widget = createWidgetFromSchema(currencyWidgetSchema, {});

            expect(widget.type).toEqual('CURRENCY');
        });
    });
});
