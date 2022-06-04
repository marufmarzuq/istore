import React, { useState } from "react";
import "./CartSidebar.css";
import { cartProducts } from "../../data";
import { VscChromeClose } from "react-icons/vsc";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

const CartSidebar = () => {
  const [activeCartModal, setActiveCartModal] = useState(true);
  document.onclick = (e) => {
    if (e.target.className === "cart-modal-overlay true") {
      setActiveCartModal(false);
    }
  };
  return (
    <>
      <div className={`cart-modal-overlay ${activeCartModal}`}></div>
      <div className={`cart-sidebar ${activeCartModal}`}>
        <div className="cart-sidebar-container">
          <div
            className="cart-sidebar-header"
            onClick={() => setActiveCartModal(false)}
          >
            <VscChromeClose />
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
                      <VscChromeClose />
                    </div>
                    <div className="cart-sidebar-product-quantity-container">
                      <div className="product-quantity-container">
                        <span>Qty</span>
                        <div className="product-quantity-btns">
                          <span>
                            <IoMdArrowDropleft />
                          </span>
                          <input type="number" value={product.quantity} />
                          <span>
                            <IoMdArrowDropright />
                          </span>
                        </div>
                      </div>

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
    </>
  );
};

export default CartSidebar;
