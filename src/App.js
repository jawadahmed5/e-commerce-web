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
// import CartList from './eCommerce/CartList/CartList';



function App() {
  const router = createBrowserRouter([
    {path: "/", element: <PrimarySearchAppBar/>, errorElement: <ErrorPage/> },
    {path: "/Sign-up", element: <Signup/> },
    {path:"/Sign-in", element: <Signin/>},
    // {path:"/Home-page", element: <}
  ])
  return (
    <div className="App">
      {/* <CartList/> */}
     {/* <RouterProvider router={router}/> */}
<Provider store={Store}>
     
     <RouterProvider router={router} />

     </Provider>
     {/* <ErrorPage/> */}
    </div>
  );
}

export default App;
