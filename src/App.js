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
import ProtectedRoutes from './eCommerce/Protected-routes/ProtectedRoutes';
// import CartList from './eCommerce/CartList/CartList';
// import file from './eCommerce/folder/File';
// import Header from './eCommerce/Header/Header';
// import File from './eCommerce/folder/File';



function App() {
  const router = createBrowserRouter([
    {
      path: "/", element:

        <ProtectedRoutes>
          <PrimarySearchAppBar />
        </ProtectedRoutes>
      ,
      errorElement: <ErrorPage />
    },
    {
      path: "/Products-Detail/:product_id",
      element:
        <ProtectedRoutes>
          <ProductsDetails />
          </ProtectedRoutes >
    },
          {path: "/Sign-up", element: <Signup /> },
          {path: "/Sign-in", element: <Signin /> },

          ])
          return (
          <div className="App">
            <Provider store={Store}>

              <RouterProvider router={router} />

            </Provider>

          </div>
          );
}

          export default App;
