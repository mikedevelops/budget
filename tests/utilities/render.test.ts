import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {renderCurrencyWidget } from '../../src/utiltieis/render';

describe('renderCurrencyWidget', () => {
    test('should render a currency widget', () => {
        const component = renderer.create(
            renderCurrencyWidget('test_currency', {
                type: 'currency',
                value: 666,
                meta: {
                    currency: '£'
                }
            })
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});
