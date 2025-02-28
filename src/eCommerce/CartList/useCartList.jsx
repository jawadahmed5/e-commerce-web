import { useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';

// Selector function for cart state
const selectCart = (state) => state.cart;

// Memoized selector
const cartSelector = createSelector(
  [selectCart],
  (cart) => ({
    cartItems: cart.items || [],
    totalPrice: cart.items?.reduce((total, item) => total + item.price * item.quantity, 0) || 0,
  })
);

const useCartList = () => {
  return useSelector(cartSelector);
};

export default useCartList;
