import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
// import ProductImage1 from '../../Assets/product-img-1.jpg';
// import ProductImage2 from '../../Assets/product-img-2.jpg';
// import ProductImage3 from '../../Assets/product-img-3.jpg';
// import ProductImage4 from '../../Assets/product-img-4.jpg';
// import Rating from '@mui/material/Rating';
// import { Button, Card } from '@mui/material';
import ProductsList from '../Product-list/ProductsList';
import { Link, Outlet } from 'react-router-dom';
// import { Category } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartList from '../CartList/CartList';
import { useSelector } from 'react-redux';
import Header from '../Header/Header';
// import CartList from '../Cart-List/CartList';


const productsCards = []


export default function PrimarySearchAppBar() {
 
    return (
        <Box sx={{ flexGrow: 1 }}>
           

<Header/>

<ProductsList productsCards={productsCards} />





        </Box>


    );
}



