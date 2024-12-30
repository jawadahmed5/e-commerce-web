


// import React, { useState } from 'react';
// import { Box, Button, Drawer, Tooltip, Typography } from '@mui/material';
// import { useSelector } from 'react-redux';

// const CartList = (props) => {
//   const { openCart, toggleCart } = props;
//   const { cartItems } = useSelector((state) => state.cart);

//   return (
//     <Drawer open={openCart} onClose={toggleCart(false)}>
//       <Box sx={{ maxWidth: "340px", width: "100%" }}>
//         <Typography variant='h5' className='text-center bg-primary text-white py-3 fw-bold'>
//           Shopping Cart
//         </Typography>

//         {cartItems?.map((item) => {
//           return (
//             <Box key={item.id} sx={{ display: 'flex', alignItems: 'center', paddingTop: '16px', width: '100%' }}>
//               {/* Image Section */}
//               <Box sx={{ display: 'flex', flex: 1 }}>
//                 <img style={{ width: "60px", height: "auto" }} src={item?.image} alt="" />
//                 <Box sx={{ paddingLeft: 1 }}>
//                   <Tooltip title={item.title} placement='top' sx={{ cursor: "pointer" }}>
//                     <Typography>
//                       {item?.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}
//                     </Typography>
//                   </Tooltip>
//                   <Typography>{item?.category}</Typography>
//                   <Typography>{item?.price} <span>Qty: {item.quantity}</span></Typography>
//                 </Box>
//               </Box>

//               {/* Buttons Section */}
//               <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
//                 <Button variant='contained' size="small">+</Button>
//                 <Button variant='contained' size="small">-</Button>
//                 <Button variant='contained' size="small">Delete</Button>
//               </Box>
//             </Box>
//           );
//         })}
//       </Box>
//     </Drawer>
//   );
// };

// export default CartList;














import React, { useState } from 'react';
import { Box, Button, Drawer, Tooltip, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useDispatch, useSelector } from 'react-redux';
// import {DeleteIcon} from "@mui/icons-material" 
// import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { decreaseQuantity, deleteItem, increaseQuantity } from '../Store/slice/cart/cartSlice';



const CartList = (props) => {
  const { openCart, toggleCart } = props;

  const { cartItems } = useSelector((state) => state.cart)

const dispatch = useDispatch()

  console.log(cartItems, "cartItems");


  return (
    <Drawer open={openCart} onClose={toggleCart(false)}>

      <Box sx={{ width: "300px", }} >
        <Typography variant='h5' className='text-center bg-primary text-white p-3 fw-bold'>Shopping Cart</Typography>

        {cartItems?.map((item) => {
          return <>

            <Box className='d-flex border border-1 border-black '>
              
              <Box className='col-9 d-flex mt-4 ps-1 '>
                <img style={{ width: "100%", maxWidth: "60px" }} src={item?.image} alt="" />

                {/* <img width={100} src={item?.image} alt="" /> */}
                <Box className='ps-1'>
                  <Tooltip title={item.title} placement='top' sx={{ cursor: "pointer" }}>
                    <Typography className=''>{item?.title.length > 20 ? `${item.title.substring(0, 20)}...` : item.title}</Typography>
                  </Tooltip>

                  <Typography className=''>{item?.category}</Typography>
                  <Typography className=''>{item?.price} <span>Qty: {item.quantity}</span></Typography>
                </Box>
              </Box>
              <Box className='col-3  '>
                <Box className='mt-3 text-center'>
                <Button onClick={() => dispatch(increaseQuantity(item))}  className='border-0  bg-transparent  text-danger' variant='small'>
                  
                  <AddIcon/>
                </Button>
                <Button onClick={() => dispatch(decreaseQuantity(item))} className='  bg-transparent  text-primary border-0  ' variant='small'>
                  
                  <RemoveIcon/>
                </Button>
                <Button onClick={() => dispatch(deleteItem(item))}   className='border-0  bg-transparent  text-danger'>
                  < DeleteIcon/>
                </Button>
                </Box>
              </Box>
            </Box>
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
