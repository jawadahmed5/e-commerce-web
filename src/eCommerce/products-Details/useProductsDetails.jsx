import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const useProductsDetails = () => {







    const [product, setProduct] = useState([]);
    const [loadingData, setLoadingData] = useState(true)
    const { product_id } = useParams()
      const [value, setValue] = useState(2);
      const [open, setOpen] = React.useState(false);
  
  
      const [products, setProducts] = useState([]);
   
  
      const handleOpen = () => setOpen(true);
      const handleClose = () => setOpen(false);
    
  
    useEffect(() => {
      const productsData = axios.get(`https://fakestoreapi.com/products/${product_id}`).then(
        (data) => {
          setProduct(data.data);
  
  
  
          setLoadingData(false);
        })
  
  
    }, [])
  



  return {loadingData,value,setValue,product,setProducts,open,handleOpen,handleClose}
}

export default useProductsDetails