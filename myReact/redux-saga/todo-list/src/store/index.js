import {createStore,applyMiddleware,compose} from "redux";  //从redux插件创建一个store
import reducer from "./reducer"; //关联reducer
import createSagaMiddleware from 'redux-saga';
import mySagas from './sagas';

//https://github.com/redux-saga/redux-saga

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(sagaMiddleware),
);
//实例化store
const store = createStore(reducer, enhancer);

sagaMiddleware.run(mySagas);
export default store;