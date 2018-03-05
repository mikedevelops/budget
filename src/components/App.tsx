import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import appReducer from '../reducers/appReducer';
import HistoryContainer from './history/HistoryContainer';
import DashboardContainer from './dashboard/DashboardContainer';
import EditContainer from './edit/EditContainer';
import CreateSchemaComponent from './schema/CreateSchemaComponent';
import { schema } from '../schema/schema';
import { Component } from 'react';
import CreateSchemaContainer from './schema/CreateSchemaContainer';

const store = createStore(appReducer) as any;

export default class App extends Component<any, any> {
    public render () {
        return (
            <Provider store={store}>
                <div>
                    <CreateSchemaContainer/>
                </div>
            </Provider>
        );
    }
}
