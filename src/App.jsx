import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Product from "./components/Product";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/cart/CartContext";

const App = () => {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Home />
        <Product />
      </CartProvider>
    </>
  );
};

export default App;
