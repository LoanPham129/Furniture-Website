import React from "react";
import { CartProvider } from "./components/cart/CartContext";
import MainPage from "./components/MainPage.jsx";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout .jsx";
import CartPage from "./components/cart/cartPage.jsx";
import AuthContainer from "./components/pages/AuthContainer.jsx";
import { AuthProvider } from "./components/pages/AuthProvider.jsx";

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <div className="overflow-x-hidden w-full max-w-screen">
          <Routes>
            <Route path="/login" element={<AuthContainer mode="login" />} />
            <Route path="/signup" element={<AuthContainer mode="signup" />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path="cart" element={<CartPage />} />
            </Route>
          </Routes>
        </div>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
