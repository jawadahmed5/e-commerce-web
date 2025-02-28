import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            console.log("Adding to Cart:", action.payload);

            const existingItem = state.cartItems.find(item => item.id === action.payload.id);

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartItems.push({ ...action.payload, quantity: 1 });
            }
        },

        increaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item) {
                item.quantity += 1;
            }
        },

        decreaseQuantity: (state, action) => {
            const item = state.cartItems.find(item => item.id === action.payload.id);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },

        deleteItem: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
        }
    }
});

// Actions Export
export const { addToCart, increaseQuantity, decreaseQuantity, deleteItem } = cartSlice.actions;

// Reducer Export
export default cartSlice.reducer;
