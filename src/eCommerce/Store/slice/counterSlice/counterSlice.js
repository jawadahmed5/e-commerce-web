import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:"23",
    },
    reducers:{},

})

export const {  } = counterSlice.actions

export default counterSlice.reducer