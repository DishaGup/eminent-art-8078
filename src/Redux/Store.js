import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";

const rootReducer=combineReducers({
    //create reducers accordingly
})


export const store=legacy_createStore(rootReducer,applyMiddleware(thunk))