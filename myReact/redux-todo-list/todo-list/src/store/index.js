import {createStore,applyMiddleware,compose} from "redux";  //从redux插件创建一个store
import reducer from "./reducer"; //关联reducer
import thunk from "redux-thunk";

//https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk),
);
//实例化store
const store = createStore(reducer, enhancer);


export default store;