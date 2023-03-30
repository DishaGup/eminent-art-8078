import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as adminReducer } from "./AdminReducer/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  adminReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
