import { configureStore } from "@reduxjs/toolkit";
import Cart from "../reducer/carts";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";



const config = {
    key: "root",
    storage
}

const allReducers = combineReducers({
    cart: Cart
})

const reducers = persistReducer(config, allReducers)

const Store = configureStore({
    reducer: reducers
})

export default Store