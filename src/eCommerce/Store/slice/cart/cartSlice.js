import { createSlice } from "@reduxjs/toolkit";

const cartList = createSlice({
    name : 'AddtoCart',
    initialState:{
cartItems:[],

    },
    reducers:{

AddCart:() => {},
    },
})

export const {AddCart} = cartList.actions;

export default cartList.reducer;

// Above is basic Boiler plate
// import { createSlice } from "@reduxjs/toolkit";

// const cartList = createSlice({
//     name : 'AddtoCart',
//     initialState:{},
//     reducers:{

// AddCart:() => {},
//     },
// })

// export const {AddCart} = cartList.actions;

// export default cartList.reducer;

// // Above is basic Boiler plate