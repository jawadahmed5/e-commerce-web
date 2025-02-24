import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const useCartList = () => {


        
      
        const { cartItems } = useSelector((state) => state.cart);
      
      
      
      
      const dispatch = useDispatch()
      
      
        const totalPrice = cartItems.reduce((value, addItem ) => addItem.price + addItem.quantity + value, 0   )
       ;
        
      

  return {dispatch,totalPrice,cartItems}
}

export default useCartList