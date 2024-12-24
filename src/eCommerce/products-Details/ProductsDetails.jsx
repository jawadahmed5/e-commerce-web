import { Box, CircularProgress, Rating, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// import { Button } from 'bootstrap';
import { Button } from '@mui/material';


const ProductsDetails = () => {
  const [product, setProduct] = useState([]);
  const [loadingData, setLoadingData] = useState(true)
  const { product_id } = useParams()
    const [value, setValue] = useState(2);


    const [products, setProducts] = useState([]);
    // const [loadingData, setLoadingData] = useState(true)

  console.log(product);





  useEffect(() => {
    const productsData = axios.get(`https://fakestoreapi.com/products/${product_id}`).then(
      (data) => {
        setProduct(data.data);



        setLoadingData(false);
      })
    console.log(productsData);


  }, [])


  return (
    <>

      <Header />

      
      <Box className='text-center'>


 {loadingData ? <CircularProgress /> :

        <div className='container mt-5 text-start'>
          <div className='row'>
            <div className='col-lg-4 col-md-4 col-sm-12 '>
              <img className='img-fluid' img-fluid src={product.image} alt="" />
            </div>
            <div className='col-lg-8 col-md-8 col-sm-12  '>
              <span className=''>{product.category}</span>
              <h5>{product.title}</h5>
              <p>{product.description}</p>

              <Typography variant='h6'>
                                        {product?.rating?.rate}
                                    </Typography>


                                    <Rating
                                        name="simple-uncontrolled"
                                        value={product?.rating?.rate}
                                        onChange={(event, newValue) => {
                                            setValue(newValue);


                                        }}
                                        defaultValue={product?.rating?.rate}
                                    />

                                    <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography >
                                            {product.price}
                                        </Typography>
                                       <Button size='small' variant="contained" color="success">
                                            Add
                                        </Button>

                                    </Box>


            </div>
          </div>
        </div>
}








      </Box>
    </>

  )
}

export default ProductsDetails;