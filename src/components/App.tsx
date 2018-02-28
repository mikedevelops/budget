import * as React from 'react';
import DashboardContainer from '../containers/DashboardContainer';
import AmountComponent from './AmountComponent';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from '../reducers/appReducer';

const store = createStore(appReducer);

export default class App extends React.Component<any, any> {
    public render () {
        return (
            <Provider store={store}>
                <DashboardContainer/>
            </Provider>
        );
    }
}
