import React, { useState } from 'react';
import { Box, Drawer, Tooltip, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

const CartList = (props) => {
  const { openCart, toggleCart } = props;

const {cartItems} = useSelector((state) => state.cart)

console.log(cartItems, "cartItems");


  return (
    <Drawer open={openCart} onClose={toggleCart(false)}>

      <Box sx={{ width: "270px", height: "100%", }} >
        <Typography variant='h5' className='text-center bg-primary text-white p-3 fw-bold'>Shopping Cart</Typography>

{cartItems?.map((item) => {
  return <>

  <div className='d-flex pt-4 '>
  <img width={60} src={item?.image} alt="" />
<Box className='ps-1'>
  <Tooltip title={item.title} placement='top' sx={{ cursor: "pointer" }}>
  <Typography  className=''>{item?.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</Typography>
  </Tooltip>
  
  <Typography  className=''>{item?.category}</Typography>
  <Typography  className=''>{item?.price}</Typography>
  </Box>
  </div>
  </>
})}


        {/* <Box className='d-flex justify-content-center align-items-center flex-column' sx={{ width: "270px", height: "100%" }} >
          <Typography>Your Shopping Cart is Empty</Typography>


          <Box>
            <ShoppingCartIcon />
          </Box>
        </Box> */}
      </Box>
    </Drawer>
  );
};

export default CartList;
