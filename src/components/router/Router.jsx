import { Shop } from "@mui/icons-material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthModalContainer from "../../containers/authModalContainer";
import CartSidebarContainer from "../../containers/cartSidebarContainer";
import HeaderContainer from "../../containers/headerContainer";
import Home from "../screen/home/Home";
import SingleProduct from "../screen/singleProduct/SingleProduct";
import Footer from "../ui/footer/Footer";

const Router = () => {
  return (
    <div>
      <HeaderContainer />
      <AuthModalContainer />
      <CartSidebarContainer />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/products/:dfsd" element={<SingleProduct />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default Router;
