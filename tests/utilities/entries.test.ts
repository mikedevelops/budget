import { ICurrencyFigure } from '../../src/interfaces/Figure';
import { mergeCurrencyFigure } from '../../src/utiltieis/entries';

describe('mergeCurrencyFigure', () => {
    test('should merge currency figures by incrementing values', () => {
        const oldFigure: ICurrencyFigure = {
            type: 'currency',
            value: 666,
            meta: {
                currency: '£'
            }
        };
        const newFigure: ICurrencyFigure = {
            type: 'currency',
            value: 666,
            meta: {
                currency: '£'
            }
        };

        expect(mergeCurrencyFigure(oldFigure, newFigure)).toEqual({
            type: 'currency',
            value: 1332,
            meta: {
                currency: '£'
            }
        });
    });
});
