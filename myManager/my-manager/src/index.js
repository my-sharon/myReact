import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css"
import "font-awesome/css/font-awesome.css"
import "nprogress/nprogress.css"
import "./Common/css/index.css"
import "bootstrap/dist/js/bootstrap"
import App from './App';
import store from "./Store";
import {Provider} from 'react-redux';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,
    document.getElementById('root'));


serviceWorker.unregister();
