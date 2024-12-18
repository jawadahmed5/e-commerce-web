import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:55,
    },
    reducers:{},

})

export const {  } = counterSlice.actions

export default counterSlice.reducer