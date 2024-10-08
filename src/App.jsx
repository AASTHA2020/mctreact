import React from 'react';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, RouterProvider, ScrollRestoration } from "react-router-dom";
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/Home';
import { productsData } from './api/api';
import Cart from './pages/Cart';
import ProductDetails from './components/home/ProductDetails';
import Checkout from './pages/Checkout';
import Orders from './pages/Orders';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
// import Chatbot from './components/Chatbot'; // Import Chatbot component


const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
};

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} loader={productsData}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />}></Route>
          <Route path="/orders" element={<Orders />} />
        </Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Route>
    )
  );

  return (
    <div className='font-bodyfont bg-gray-100'>
      <RouterProvider router={router}>
        {/* Add Chatbot component
        <Chatbot /> */}
      </RouterProvider>
    </div>
  );
}

export default App;
