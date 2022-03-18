import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import AddtoCart from "../Pages/AddtoCart";
import {Header, Footer} from "../Components";
import Page404 from "../Pages/Page404";

const AppRoutes = () => {

  return (
    <>
      <Header  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/:productId"
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
