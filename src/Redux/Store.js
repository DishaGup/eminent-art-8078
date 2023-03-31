import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as adminReducer } from "./AdminReducer/reducer";
import thunk from "redux-thunk";

import {reducer as ProductReducer} from './ProductReducer/reducer'
const rootReducer=combineReducers({
    ProductReducer, adminReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
