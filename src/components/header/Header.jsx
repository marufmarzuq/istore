import "./Header.css";
import { useState } from "react";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import HeaderMenu from "../headerMenu/HeaderMenu";

const Header = () => {
    const [menuStatus, setMenuStatus] = useState(false);

    return (
        <header>
            <div className="container">
                <div className="toggle">
                    <span onClick={() => setMenuStatus(!menuStatus)}>
                        {!menuStatus ? <MenuIcon fontSize="medium" /> : <CloseIcon fontSize="medium" />}
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
                                    <FavoriteBorderOutlinedIcon />
                                </span>
                            </div>
                            <div className="nav-item">
                                <span>
                                    <Badge badgeContent={4} color="primary">
                                        <ShoppingCartOutlinedIcon />
                                    </Badge>
                                </span>
                            </div>
                            <div className="nav-item">
                                <span>
                                    <AccountCircleOutlinedIcon />
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
