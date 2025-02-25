import { createSlice } from "@reduxjs/toolkit";

const cartList = createSlice({
    name: 'AddtoCart',
    initialState: {
        cartItems: [],

    },
    reducers: {

        AddCart: (state, action) => {
            console.log(action.payload, "actions");


            const isExist = state.cartItems.find((item) => item.id === action.payload.id);


            if (isExist) {
                isExist.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });

            }

        },

        increaseQuantity: (state, action) => {
            const isExist = state.cartItems.find((item) => item.id === action.payload.id);


            if (isExist) {
                // Increase quantity of the item by 1
                isExist.quantity += 1;
            }

        },

        decreaseQuantity: (state, action) => {
            const isExist = state.cartItems.find((item) => item.id === action.payload.id);


            if (isExist && isExist.quantity > 1 ) {
                isExist.quantity -= 1;

            }

        },

deleteItem: (state, action) => {
state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);

}

    },


})



export const { AddCart, increaseQuantity, decreaseQuantity,deleteItem } = cartList.actions;




export default cartList.reducer;

