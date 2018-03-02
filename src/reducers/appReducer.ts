import { Action, AnyAction } from 'redux';
import { IDefaultState } from '../interfaces/DefaultState';
import { IEditInputState } from '../components/edit/EditComponentInterface';

const defaultState: IDefaultState = {
    entries: [
        {
            'target': {
                type: 'currency',
                value: 25000,
                created: new Date(),
                meta: {
                    currency: '£'
                }
            },
            'saving per month': {
                type: 'currency',
                value: 1000,
                created: new Date(),
                meta: {
                    currency: '£'
                }
            }
        }
    ]
};

// const defaultState: IDefaultState = {
//     entries: []
// };

const app = (state: {}, action: AnyAction): {} => {
    switch (action.type) {
        case 'ADD_SUBMISSION':
            const payload = action.submission as IEditInputState[];
            const next = Object.assign({}, state) as IDefaultState;
            const newEntry = Object.assign({}, next.entries[next.entries.length - 1]);

            Object.keys(newEntry).forEach((label: string) => {
                const { value } = payload.find((input: IEditInputState) => input.name === label);

                newEntry[label].value = parseInt(value, 10);
            });

            next.entries.push(newEntry);

            console.log('next state: ', next);

            return next;
        default:
            return defaultState;
    }
};

export default app;
