import React, { useState } from 'react';
import { Box, Drawer, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const CartList = (props) => {
  const { openCart, toggleCart } = props;

const {cartItems} = useSelector((state) => state.cart)

console.log(cartItems);


  return (
    <Drawer open={openCart} onClose={toggleCart(false)}>

      <Box sx={{ width: "270px", height: "100%", }} >
        <Typography variant='h5' className='text-center bg-primary text-white p-3 fw-bold'>Shopping Cart</Typography>

        <Box className='d-flex justify-content-center align-items-center flex-column' sx={{ width: "270px", height: "100%" }} >
          <Typography>Your Shopping Cart is Empty</Typography>


          <Box>
            <ShoppingCartIcon />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};

export default CartList;
