import { Autocomplete, Box, CircularProgress, Grid, Pagination, Rating, TextField, Tooltip, Typography } from '@mui/material';
import { Button, Card } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
import productsDetails from '../products-Details/ProductsDetails';
import { useDispatch } from 'react-redux';
import CartList from '../CartList/CartList';
import { AddCart } from '../Store/slice/cart/cartSlice';
import useProductList from './useProductList';

const ProductsList = (props) => {
    const { productsCards } = props;





    const { dispatch, loadingData, currentPage, totalPages, setCurrentPage, itemsPage, setValue, products } = useProductList();





    if (!productsCards) {
        return <div></div>;

    }


    return (

        <>
            {/* <Autocomplete
      disablePortal
      
      options={[]}
      sx={{ width: 250, padding:"10px", }}
      renderInput={(params) => <TextField {...params} label="Category" />}
    /> */}
            <Grid



                container p={5} spacing={5}       >


                {loadingData ? <CircularProgress /> :

                    products.slice((currentPage - 1) * itemsPage, currentPage * itemsPage)?.map((product) => {
                        return (
                            <Grid item sm={3}>
                                <Card style={{ minWidth: "300px", maxWidth: "300px", minHeight: "100%", maxHeight: "100%" }} className="p-3 ">
                                    <img className='text-center' style={{ minWidth: "100%", maxWidth: "100%", minHeight: "200px", maxHeight: "200px", backGround: "red" }} className='img-fluid' src={product.image} alt="" />
                                    <Typography className='pt-1' variant='body1'>
                                        {product.category}
                                    </Typography>

                                    <Tooltip title={product.title} placement='top' sx={{ cursor: "pointer" }}>
                                        <Typography className='pt-1 fw-semibold' variant='body2'>
                                            {product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title}
                                        </Typography>
                                    </Tooltip>
                                    <Typography variant='h6'>
                                        {product.rating.rate}
                                    </Typography>


                                    <Rating
                                        name="simple-uncontrolled"
                                        value={product.rating.rate}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);


                                        }}
                                        defaultValue={product.rating.rate}
                                    />

                                    <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography >
                                            {product.price}
                                        </Typography>
                                        <Tooltip title="View Details" placement='top'>
                                            {/* <Link to={`/Products-Detail${product?.id}`}> */}

                                            <Link to={`/Products-Detail/${product?.id}`}>


                                                <Button size='small' className='ms-4'><VisibilityIcon /></Button>
                                            </Link>
                                        </Tooltip>
                                        <Button size='small' variant="contained" color="success" onClick={() => dispatch(AddCart(product))}>
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
            <Box className='d-flex justify-content-center pb-2'>
                <Pagination onChange={(e, value) => { setCurrentPage(value) }} count={totalPages} variant="outlined" color="primary" />
            </Box>
        </>
    )
}

export default ProductsList;