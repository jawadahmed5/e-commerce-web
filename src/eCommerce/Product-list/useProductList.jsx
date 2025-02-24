import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';



const useProductList = () => {

    const [value, setValue] = useState(2);


    const [products, setProducts] = useState([]);
    const [loadingData, setLoadingData] = useState(true)
const [currentPage , setCurrentPage] = useState();


    const itemsPage = 8;

const totalPages = Math.ceil(products.length/itemsPage)



const dispatch = useDispatch();




    useEffect(() => {
        const productsData = axios.get("https://fakestoreapi.com/products").then(
            (data) => {
                setProducts(data.data);



                setLoadingData(false);
            })


    }, [])


    


  return {value,dispatch,loadingData,currentPage,totalPages,setCurrentPage,itemsPage,setValue,products}
}

export default useProductList