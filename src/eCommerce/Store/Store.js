import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Store/slice/counterSlice/counterSlice"


export const Store = configureStore({
    reducer:{
        counter:counterReducer,
    },
});