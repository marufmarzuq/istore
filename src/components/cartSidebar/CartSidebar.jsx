import React from "react";
import "./CartSidebar.css";
import { cartProducts } from "../../data";
import CloseIcon from "@mui/icons-material/Close";

const CartSidebar = () => {
    console.log();
    return (
        <div className="cart-sidebar">
            <div className="cart-sidebar-container">
                <div className="cart-sidebar-header">
                    <CloseIcon />
                </div>
                <div className="cart-sidebar-scrollable-container">
                    {cartProducts.map((product) => {
                        return (
                            <div className="cart-sidebar-single-product">
                                <div className="cart-sidebar-product-img">
                                    <img src={product.img} alt="" />
                                </div>
                                <div className="cart-sidebar-product-details">
                                    <div className="cart-sidebar-product-name-container">
                                        <span>{product.name}</span>
                                        <CloseIcon />
                                    </div>
                                    <div className="cart-sidebar-product-quantity-container">
                                        <span>{product.quantity}</span>
                                        <span>${product.price}</span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="cart-sidebar-footer">
                    <div className="cart-subtotal">
                        <span>Subtotal:</span>
                        <span>$793.00</span>
                    </div>
                    <div className="cart-update-btn">
                        <span>Update Cart</span>
                    </div>
                    <div className="cart-chekout-btn">
                        <span>Checkout</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSidebar;
