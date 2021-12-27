import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './layout';
import './index.css'

import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from './contexts/authContext';
import CartContextProvider from './contexts/cartContext';
import CategoryContextProvider from './contexts/categoryContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <CategoryContextProvider>
        <CartContextProvider>
        <Layout />
        </CartContextProvider>
        </CategoryContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
