import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { singleProduct } from "../../data";
import "./SingleProduct.css";
import DescAndReview from "../../components/descAndReview/DescAndReview";

const SingleProduct = () => {
    const { name, img, price, shortDesc, desc } = singleProduct;
    return (
        <div className="single-product">
            <Header />
            <section className="single-product-section">
                <div className="container single-product-container">
                    <div className="single-product-img-container">
                        <img src={img} alt="" />
                    </div>
                    <div className="add-to-cart-container">
                        <div className="atc-name-heart">
                            <h2 className="product-name">{name}</h2>
                            <span>
                                <FavoriteBorderOutlinedIcon />
                            </span>
                        </div>
                        <p className="product-price">${price}</p>
                        <p className="short-desc">{shortDesc}</p>
                        <div className="quantity-and-btn">
                            <div className="product-quantity">
                                <span>
                                    <ArrowLeftIcon fontSize="large" />
                                </span>
                                <input type="number" defaultValue="1" />
                                <span>
                                    <ArrowRightIcon fontSize="large" />
                                </span>
                            </div>
                            <button className="add-to-cart">Add to cart</button>
                        </div>
                    </div>
                </div>
            </section>
            <DescAndReview desc={desc} />
            <Footer />
        </div>
    );
};

export default SingleProduct;
