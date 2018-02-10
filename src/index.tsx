import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import appReducer from './reducers/appReducer';
import { createStore } from 'redux';

const root = document.getElementById('root');
const store = createStore(appReducer);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    root
);
