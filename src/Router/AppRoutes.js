import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import AddtoCart from "../Pages/AddtoCart";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Page404 from "../Pages/Page404";

const AppRoutes = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/store/men/running-shoes" element={<Home />} />
        <Route
          path="/store/men/running-shoes/:productId"
          element={<ProductDetails />}
        />
        <Route path="/store/shopping-cart" element={<AddtoCart />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRoutes;
