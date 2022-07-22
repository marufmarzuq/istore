import React from "react";
import NewsLettter from "../../ui/newsLetter/NewsLettter";
import Products from "../../ui/products/Products";
import "./Shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <Products />
      <NewsLettter />
    </div>
  );
};

export default Shop;
