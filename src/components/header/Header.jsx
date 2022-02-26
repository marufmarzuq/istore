import "./Header.css";
import { useState } from "react";
import HeaderMenu from "../headerMenu/HeaderMenu";
import { HiOutlineHeart } from "react-icons/hi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { VscChromeClose } from "react-icons/vsc";
import { HiHeart } from "react-icons/hi";
import { MdOutlineNightsStay } from "react-icons/md";

const Header = ({ handleTheme, darkTheme }) => {
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <header style={darkTheme ? { backgroundColor: "#333", color: "white" } : { backgroundColor: "white" }}>
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
                                <span onClick={handleTheme}>
                                    <MdOutlineNightsStay />
                                </span>
                            </div>
                            <div className="nav-item">
                                <span>
                                    <HiOutlineHeart />
                                </span>
                            </div>
                            <div className="nav-item shopping-cart">
                                <span>
                                    <HiOutlineShoppingCart />
                                </span>
                                <div className="shopping-cart-badge">{5}</div>
                            </div>
                            <div className="nav-item">
                                <span>
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
