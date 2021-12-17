import React from "react";
import "./Product.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Product = ({ product }) => {
    const { img, name, price } = product;
    return (
        <div className="product-box">
            <div className="product-img-container">
                <img className="product-img" src={img} alt="" />
                <div className="product-action-btns">
                    <div>
                        <a href="#">
                            <FavoriteBorderIcon fontSize="medium" />
                        </a>
                        <a href="#">
                            <SearchIcon fontSize="medium" />
                        </a>
                        <a href="#">
                            <ShoppingCartOutlinedIcon fontSize="medium" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="product-box-footer">
                <p className="product-name">{name}</p>
                <p className="product-name">${price}</p>
            </div>
        </div>
    );
};

export default Product;
