import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { featReducer } from './reducers/featReducer';

import 'bulma/css/bulma.css';
import './styles.scss';


const store = createStore(featReducer);
console.log('current state: ', store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />, rootElement);
</Provider>,
    rootElement
);