import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from '../reducers/appReducer';
import HistoryContainer from './history/HistoryContainer';
import DashboardContainer from './dashboard/DashboardContainer';
import EditContainer from './edit/EditContainer';

const store = createStore(appReducer);

export default class App extends React.Component<any, any> {
    public render () {
        return (
            <Provider store={store}>
                <div>
                    <EditContainer/>
                    <HistoryContainer/>
                    <DashboardContainer/>
                </div>
            </Provider>
        );
    }
}
