import { Skeleton } from '@mui/material';
import React from 'react'

export const SkeletonProductsDetails = () => {
  return (


    <div className='container mt-5 text-start'>
    <div className='row'>
      <div className='col-lg-4 col-md-4 col-sm-12  '>
      <Skeleton className='rounded-3' variant="rectangular" width={300} height={340} />
      </div>
      <div className='col-lg-8 col-md-8 col-sm-12  '>
      <Skeleton variant="text" width={610} height={40} />
      <Skeleton variant="text" width={610} height={50} />
      <Skeleton variant="rectungular" width={610} height={190} />
      <Skeleton variant="text" width={80} height={40} />
      <div className='d-flex justify-content-between'>
      <Skeleton variant="text" width={130} height={40} />
      <Skeleton variant="text" width={80} height={40} />
      </div>
    
{/* 
        <Typography variant='h6'>
                                  {product?.rating?.rate}
                              </Typography> */}


                              {/* <Rating
                                  name="simple-uncontrolled"
                                  value={product?.rating?.rate}
                                  onChange={(event, newValue) => {
                                      setValue(newValue);


                                  }}
                                  defaultValue={product?.rating?.rate}
                              /> */}

                              {/* <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: "center" }}>
                                  <Typography >
                                      {product.price}
                                  </Typography>
                                 <Button size='small' variant="contained" color="success">
                                      Add
                                  </Button>

                              </Box> */}


      </div>
    </div>
  </div>
  )
}
