import { 
    Box, CircularProgress, Grid, Pagination, Rating, Tooltip, Typography, Button, Card 
} from '@mui/material';
import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Link } from 'react-router-dom';
// import { addToCart } from '../Store/slice/cart/cartSlice';
import { addToCart } from '../Store/slice/cart/cartSlice';

import useProductList from './useProductList';

const ProductsList = ({ productsCards }) => {
    const { dispatch, loadingData, currentPage, totalPages, setCurrentPage, itemsPage, setValue, products } = useProductList();

    if (!productsCards) {
        return null;
    }

    return (
        <>
            <Grid container p={5} spacing={5}>
                {loadingData ? (
                    <CircularProgress />
                ) : (
                    products
                        .slice((currentPage - 1) * itemsPage, currentPage * itemsPage)
                        .map((product) => (
                            <Grid item sm={12} md={4} lg={3} key={product.id}>
                                <Card sx={{ minWidth: 300, maxWidth: 300, minHeight: '100%', maxHeight: '100%' }} className="p-3">
                                    <img 
                                        className="text-center img-fluid"
                                        style={{ minWidth: '100%', maxWidth: '100%', minHeight: 200, maxHeight: 200, background: 'red' }} 
                                        src={product.image} 
                                        alt={product.title} 
                                    />
                                    <Typography className="pt-1" variant="body1">
                                        {product.category}
                                    </Typography>

                                    <Tooltip title={product.title} placement="top">
                                        <Typography className="pt-1 fw-semibold" variant="body2">
                                            {product.title.length > 20 ? `${product.title.substring(0, 20)}...` : product.title}
                                        </Typography>
                                    </Tooltip>

                                    <Typography variant="h6">
                                        {product.rating.rate}
                                    </Typography>

                                    <Rating
                                        name="simple-uncontrolled"
                                        value={product.rating.rate}
                                        onChange={(event, newValue) => setValue(newValue)}
                                        defaultValue={product.rating.rate}
                                    />

                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <Typography>
                                            ${product.price}
                                        </Typography>
                                        <Tooltip title="View Details" placement="top">
                                            <Link to={`/Products-Detail/${product.id}`}>
                                                <Button size="small" className="ms-4">
                                                    <VisibilityIcon />
                                                </Button>
                                            </Link>
                                        </Tooltip>
                                        <Button 
                                            size="small" 
                                            variant="contained" 
                                            color="success" 
                                            onClick={() => dispatch(addToCart(product))}
                                        >
                                            Add
                                        </Button>
                                    </Box>
                                </Card>
                            </Grid>
                        ))
                )}
            </Grid>

            <Box className="d-flex justify-content-center pb-2">
                <Pagination 
                    onChange={(e, value) => setCurrentPage(value)} 
                    count={totalPages} 
                    variant="outlined" 
                    color="primary" 
                />
            </Box>
        </>
    );
};

export default ProductsList;
