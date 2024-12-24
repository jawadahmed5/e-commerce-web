import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Store/slice/counterSlice/counterSlice"
import cartReducer from "../Store/slice/cart/cartSlice"

export const Store = configureStore({
    reducer:{
        counter:counterReducer,
        cart:cartReducer,
    },
});