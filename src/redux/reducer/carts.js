import { createSlice } from "@reduxjs/toolkit";

const Cart = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
        totalPrice: 0
    },

    reducers: {
        addToCart: (state, action) => {
            const newData = action.payload
            state.cartItems.push(newData)
        },

        removeFromCart: (state, action) => {
            const itemIndex = action.payload;
            state.cartItems = state.cartItems.filter((_, index) => index !== itemIndex);
        },

        calculateTotalPrice: (state) => {
            let total = 0;
            state.cartItems.forEach((item) => {
                total += item.price
            })
            state.totalPrice = total
        }


    }
})

export const { addToCart, removeFromCart, calculateTotalPrice } = Cart.actions
export default Cart.reducer