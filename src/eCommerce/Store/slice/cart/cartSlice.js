import { createSlice } from "@reduxjs/toolkit";

const cartList = createSlice({
    name: 'AddtoCart',
    initialState: {
        cartItems: [],

    },
    reducers: {

        AddCart: (state,action) => { 
    console.log(action.payload, "actions");

    state.cartItems.push({...action.payload})
        },

        
    },


})



export const { AddCart } = cartList.actions;




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