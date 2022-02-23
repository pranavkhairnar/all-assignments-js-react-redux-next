import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk)));

export default store;

/*
import {createStore,combineReducers,applyMiddleware} from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer=combineReducers({
    products:reducer,
})

const store=createStore(rootReducer,composedEnhancer);
export default store;
*/