import * as React from 'react';
import * as renderer from 'react-test-renderer';
import AmountComponent from '../../src/components/AmountComponent';

describe('AmountComponent', () => {
    test('Should render an amount component', () => {
        const component = renderer.create(
            React.createElement(AmountComponent, { currency: '$', value: 666 })
        ).toJSON();

        expect(component).toMatchSnapshot();
    });
});
