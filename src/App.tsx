import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductDetails from "./Components/ProductDetails";
import Products from "./Components/Products";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import JacketsShop from "./Components/Jackets";
import CartModel from "./Pages/CartModel";
import CheckOut from "./Pages/CheckOut";

 
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="shoes" element={<Products />} />
        <Route path="Basket" element={<CartModel />} />
        <Route path="Jackets" element={<JacketsShop />} />
        <Route path="checkout" element={<CheckOut />} />
        <Route path="ProductDetails/:id" element={<ProductDetails />} />

        {/* <Route path="*" element={{()=>{'Not found'}}} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
