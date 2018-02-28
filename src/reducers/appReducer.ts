import { Action } from 'redux';
import { IDefaultState } from '../interfaces/DefaultState';

const defaultState: IDefaultState = {
    mode: 'presentation',
    entries: [
        {
            'target': {
                type: 'currency',
                value: 25000,
                meta: {
                    currency: '£'
                }
            },
            'saving per month': {
                type: 'currency',
                value: 1000,
                meta: {
                    currency: '£'
                }
            }
        }
    ]
};

const app = (state: {}, action: Action): {} => {
    switch (action.type) {
        default:
            return defaultState;
    }
};

export default app;
