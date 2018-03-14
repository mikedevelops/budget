import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from '../reducers/appReducer';
import HistoryContainer from './history/HistoryContainer';
import DashboardContainer from './dashboard/DashboardContainer';
import EditContainer from './edit/EditContainer';
import CreateWidgetComponent from './widgets/CreateWidgetComponent';
import { schema } from '../schema/schema';
import { Component } from 'react';
import CreateWidgetContainer from './widgets/CreateWidgetContainer';

const store = createStore(appReducer) as any;

// TODO: rename all CreateSchema refs to CreateWidget

export default class App extends Component<any, any> {
    public render () {
        return (
            <Provider store={store}>
                <div>
                    <CreateWidgetContainer/>
                </div>
            </Provider>
        );
    }
}
