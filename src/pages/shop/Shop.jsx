import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import NewsLettter from "../../components/newsLetter/NewsLettter";
import Products from "../../components/products/Products";
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
