import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Signup from './eCommerce/Auth/SignupPage/Signup';
import PrimarySearchAppBar from './eCommerce/HomePage/HomePage';
import Signin from './eCommerce/Auth/Sign-In-Page/Signin';
import { ErrorPage } from './eCommerce/ErorrPage/ErrorPage';
import { Provider } from 'react-redux';
import { Store } from './eCommerce/Store/Store';
// import  productsDetails from './eCommerce/products-Details/ProductsDetails';
import ProductsDetails from './eCommerce/products-Details/ProductsDetails';
import ProductsList from './eCommerce/Product-list/ProductsList';
// import CartList from './eCommerce/CartList/CartList';
// import file from './eCommerce/folder/File';
// import Header from './eCommerce/Header/Header';
// import File from './eCommerce/folder/File';



function App() {
  const router = createBrowserRouter([
    {
      path: "/", element: <PrimarySearchAppBar />,


      // children:[


      //   // {
      //   //   path:"/jawad",
      //   //   element: <productsCards/>
      //   // },

      //   {
      //     path:"/Products-Detail",
      //      element: <ProductsDetails/>
      //     },
      //     {
      //       path:"/ahmed",
      //        element: <file/>
      //       },




      // ],






      errorElement: <ErrorPage />
    },
    {
      path: "/Products-Detail/:product_id",
      element: <ProductsDetails />
    },
    { path: "/Sign-up", element: <Signup /> },
    { path: "/Sign-in", element: <Signin /> },
    // { path: "/file", element: <File /> },

    // {path: "/Products-Detail", element:<productsDetails/> },
    // {path:"/Home-page", element: <}
  ])
  return (
    <div className="App">
      {/* <CartList/> */}
      {/* <RouterProvider router={router}/> */}
      <Provider store={Store}>
        {/* <Header/> */}

        <RouterProvider router={router} />

      </Provider>
      {/* <ErrorPage/> */}
    </div>
  );
}

export default App;
