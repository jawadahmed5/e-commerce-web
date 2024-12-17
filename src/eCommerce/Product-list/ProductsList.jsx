import { Autocomplete, Box, CircularProgress, Grid, Rating, TextField, Typography } from '@mui/material';
import { Button, Card } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
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
    const { productsCards } = props;

    const [value, setValue] = useState(2);


    const [products, setProducts] = useState([]);
    const [loadingData, setLoadingData] = useState(true)


    console.log(products);




    useEffect(() => {
        const productsData = axios.get("https://fakestoreapi.com/products").then(
    (data)=> {setProducts(data.data);


       
        setLoadingData(false);})
console.log(productsData  );


    }, [])


    if (!productsCards) {
        return <div></div>;
  
    }







    return (

        <>
<Autocomplete
      disablePortal
      
      options={[]}
      sx={{ width: 250, padding:"10px", }}
      renderInput={(params) => <TextField {...params} label="Category" />}
    />
        <Grid container p={5} spacing={5}        >


            {loadingData ? <CircularProgress /> :

                products.map((product) => {
                    return (
                        <Grid item sm={3}>
                            <Card className="p-3">
                                <img style={{ minWidth: "100%", maxWidth: "100%", minHeight: "200px", maxHeight: "200px", backGround: "red" }} className='img-fluid' src={product.image} alt="" />
                                <Typography className='pt-1' variant='body1'>
                                    {product.category}
                                </Typography>

                                <Typography  className='pt-1 fw-semibold' variant='body2'>
                                {product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title}
                                </Typography>      
                                {/* <Typography variant='h6'>
                                    {product.rating}
                                </Typography> */}


                                <Rating
                                    name="simple-uncontrolled"
                                    value={value}
                                    onChange={(event, newValue) => {
                                        setValue(newValue);


                                    }}
                                    defaultValue={2}
                                />

                                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                    <Typography >
                                        {product.price}
                                    </Typography>
                                    <Button size='small' variant="contained" color="success">
                                        Add
                                    </Button>


                                </Box>

                            </Card>
                        </Grid>
                    )
                })}




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
        </Grid>
        </>
        )
}

export default ProductsList;