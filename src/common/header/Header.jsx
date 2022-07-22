import "./Header.css";
import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";

const Header = (props) => {
  const { toggleCart, toggleAuthModal } = props;
  const [menuStatus, setMenuStatus] = useState();
  console.log("header", props);
  return (
    <header>
      <div className="container">
        <div className="toggle">
          <span onClick={() => setMenuStatus(!menuStatus)}>
            {!menuStatus ? <HiOutlineMenuAlt1 /> : <VscChromeClose />}
          </span>
        </div>
        {menuStatus ? (
          <HeaderMenu />
        ) : (
          <>
            <div className="logo">
              <a href="/">iStore</a>
            </div>
            <nav>
              <div className="nav-item">
                <span>
                  <HiOutlineHeart />
                </span>
              </div>
              <div className="nav-item shopping-cart">
                <span onClick={toggleCart}>
                  <HiOutlineShoppingCart />
                </span>
                <div className="shopping-cart-badge" onClick={toggleCart}>
                  {5}
                </div>
              </div>
              <div className="nav-item">
                <span onClick={toggleAuthModal}>
                  <HiOutlineUserCircle />
                </span>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
