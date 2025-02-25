import { Box, Rating, Typography, Button } from '@mui/material';
import React from 'react';
import Header from '../Header/Header';
import { SkeletonProductsDetails } from './SkeletonProductsDetails';
import useProductsDetails from './useProductsDetails';
import ProductModal from './ProductModal';

const ProductsDetails = () => {
  const { loadingData, value, setValue, product, open, handleOpen, handleClose } = useProductsDetails();

  return (
    <>
      <Header />
      <Box className='text-center'>
        {loadingData ? (
          <SkeletonProductsDetails />
        ) : (
          <div className='container mt-5 text-start'>
            <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-12'>
                <img className='img-fluid' src={product?.image} alt={product?.title} />
              </div>
              <div className='col-lg-8 col-md-8 col-sm-12'>
                <span>{product?.category}</span>
                <h5>{product?.title}</h5>
                <p>{product?.description}</p>

                <Typography variant='h6'>{product?.rating?.rate || 0}</Typography>

                <Rating
                  name="simple-uncontrolled"
                  value={product?.rating?.rate || 0}
                  onChange={(event, newValue) => setValue(newValue)}
                  defaultValue={product?.rating?.rate || 0}
                />

                <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                  <Typography>${product?.price}</Typography>
                  <Button size='small' variant="contained" color="success" onClick={() => console.log("Add to Cart Clicked")}>
                    Add
                  </Button>
                </Box>
              </div>
            </div>
          </div>
        )}
      </Box>

      <ProductModal open={open} handleClose={handleClose} handleOpen={handleOpen} />
    </>
  );
};

export default ProductsDetails;
