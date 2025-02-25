import React, { useState } from 'react';
import { Box, Button, Drawer, Tooltip, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { decreaseQuantity, deleteItem, increaseQuantity } from '../Store/slice/cart/cartSlice';
import useCartList from './useCartList';

const CartList = (props) => {
  const { openCart, toggleCart, cartItems } = props;
  
  const dispatch = useDispatch(); 
  const { totalPrice } = useCartList(); 
  return (
    <Drawer open={openCart} onClose={() => toggleCart(false)}> 

      <Box className='position-relative' sx={{ width: "300px", height:"99vh" }} >
        <Typography variant='h5' className='text-center bg-primary text-white p-3 fw-bold'>Shopping Cart</Typography>

        {cartItems?.map((item) => (
          <Box key={item.id} className='d-flex mt-4'>
            <Box className='col-9 d-flex ps-1'>
              <img style={{ width: "100%", maxWidth: "60px" }} src={item?.image} alt={item?.title} />

              <Box className='ps-1'>
                <Tooltip title={item.title} placement='top' sx={{ cursor: "pointer" }}>
                  <Typography>{item?.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</Typography>
                </Tooltip>
                <Typography>{item?.category}</Typography>
                <Typography>{item?.price} <span>Qty: {item.quantity}</span></Typography>
              </Box>
            </Box>

            <Box className='col-3 text-center'>
              <Button onClick={() => dispatch(increaseQuantity(item))} className='border-0 bg-transparent text-danger' size='small' variant='text'>
                <AddIcon />
              </Button>
              <Button onClick={() => dispatch(decreaseQuantity(item))} className='border-0 bg-transparent text-primary' size='small' variant='text'>
                <RemoveIcon />
              </Button>
              <Button onClick={() => dispatch(deleteItem(item))} className='border-0 bg-transparent text-danger' size='small' variant='text'>
                <DeleteIcon />
              </Button>
            </Box>
          </Box>
        ))}

        <Button className='position-absolute bottom-0' variant='contained' fullWidth>
          TOTAL PRICE : ${totalPrice}
        </Button>
      </Box>
    </Drawer>
  );
};

export default CartList;
