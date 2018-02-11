import { Action } from 'redux';

const app = (state: {}, action: Action): {} => {
    switch (action.type) {
        default:
            return {
                targetCurrency: '£',
                targetValue: 0
            };
    }
};

export default app;
