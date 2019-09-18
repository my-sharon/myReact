import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Todo from './components/Todo';
import store from "./store";
import {Provider} from "react-redux";

const App = (
    <Provider store={store}>
        <Todo/>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));

