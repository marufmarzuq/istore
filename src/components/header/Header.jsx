import "./Header.css";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="toggle">
                    <span>
                        <MenuIcon fontSize="medium" />
                    </span>
                </div>
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
            </div>
        </header>
    );
};

export default Header;
