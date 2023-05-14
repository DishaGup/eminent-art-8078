import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as adminReducer } from "./AdminReducer/reducer";
import thunk from "redux-thunk";

import {reducer as ProductReducer} from './ProductReducer/reducer'
import {reducer as PaymentReducer} from './PaymentReducer/reducer'
import {reducer as WishlistReducer} from "./WishList/reducer"
const rootReducer=combineReducers({
    ProductReducer, adminReducer,PaymentReducer,WishlistReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
