import { Box,Rating, Typography } from '@mui/material';
import { Button, Card } from '@mui/material';
import React, { useState } from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import ProductImage1 from '../../Assets/product-img-1.jpg';
// import ProductImage2 from '../../Assets/product-img-2.jpg';
// import ProductImage3 from '../../Assets/product-img-3.jpg';
// import ProductImage4 from '../../Assets/product-img-4.jpg';


const ProductsList = (props) => {
    const {productsCards} = props;

    const [value, setValue] = useState(2);


    if (!productsCards) {
        return <div></div>;  // Optional message when productsCards is not passed
    }


  return (
    <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", padding:"50px" }}            >


    {
        productsCards.map((product) => {
            return(
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                
    <Card className="p-3">
                        <img src={product.image} alt="" />
                        <Typography variant='body2'>
                            {product.Category}
                        </Typography>
    
                        <Typography variant='h6'>
                            {product.Name}
                        </Typography>
    
    
                        <Rating
                            name="simple-uncontrolled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
    
    
                            }}
                            defaultValue={2}
                        />
                        
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems:"center" }}>
                            <Typography >
                                {product.price}
                            </Typography>
                            <Button size='small' variant="contained" color="success">
                                Add
                            </Button>
    
    
                        </Box>
    
                    </Card>
    
            )
        })
    }
    
    
                    
                    {/* <Card className='p-3'>
                        <img src={ProductImage2} alt="" />
                        <Typography variant='body2'>
                            Hello world
                        </Typography>
    
                        <Typography variant='h6'>
                            NutriChoice Digestive
                        </Typography>
    
    
                        <Rating
                            name="simple-uncontrolled"
                            onChange={(event, newValue) => {
                                setValue(newValue);
    
    
                            }}
                            defaultValue={2}
                        />
                        
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems:"center" }}>
                            <Typography >
                                $24
                            </Typography>
                            <Button size='small' variant="contained" color="success">
                                Add
                            </Button>
    
    
                        </Box>
    
                    </Card>
                    <Card className='p-3'>
                        <img src={ProductImage3} alt="" />
                        <Typography variant='body2'>
                            Hello world
                        </Typography>
    
                        <Typography variant='h6'>
                            NutriChoice Digestive
                        </Typography>
    
    
                        <Rating
                            name="simple-uncontrolled"
                            onChange={(event, newValue) => {
                                setValue(newValue);
    
    
                            }}
                            defaultValue={2}
                        />
                        
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems:"center" }}>
                            <Typography >
                                $24
                            </Typography>
                            <Button size='small' variant="contained" color="success">
                                Add
                            </Button>
    
    
                        </Box>
    
                    </Card>
                    <Card className='p-3'>
                        <img src={ProductImage4} alt="" />
                        <Typography variant='body2'>
                            Hello world
                        </Typography>
    
                        <Typography variant='h6'>
                            NutriChoice Digestive
                        </Typography>
    
    
                        <Rating
                            name="simple-uncontrolled"
                            onChange={(event, newValue) => {
                                setValue(newValue);
    
    
                            }}
                            defaultValue={2}
                        />
                        
                        <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems:"center" }}>
                            <Typography >
                                $24
                            </Typography>
                            <Button size='small' variant="contained" color="success">
                                Add
                            </Button>
    
    
                        </Box>
    
                    </Card> */}
                </Box>  )
}

export default ProductsList;