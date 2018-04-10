import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './store'
import { Provider } from 'react-redux'
import Navigation from './App';

ReactDOM.render(
    <Provider store={store}>
        <Navigation />
    </Provider>
    , document.getElementById('root')
);
