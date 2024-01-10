import { configureStore } from "@reduxjs/toolkit";
import Cart from "../reducer/carts";

const Store = configureStore({
    reducer: {
        cart: Cart
    }
})

export default Store