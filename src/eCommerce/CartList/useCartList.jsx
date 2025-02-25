import { useDispatch, useSelector } from 'react-redux';

const useCartList = () => {
  const dispatch = useDispatch();

  // Get cart items from Redux store
  const cartItems = useSelector((state) => state.cart.items || []);

  // Calculate total price correctly
  const totalPrice = cartItems.length 
    ? cartItems.reduce((value, item) => value + (item.price * item.quantity), 0) 
    : 0;

  return { dispatch, totalPrice, cartItems };
};

export default useCartList;
