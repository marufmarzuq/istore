import "./Home.css";
import Header from "../../components/header/Header";
import Cover from "../../components/cover/Cover";
import Categories from "../../components/categories/Categories";
import NewProducts from "../../components/newProducts/NewProducts";
import NewsLettter from "../../components/newsLetter/NewsLettter";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div className="home">
            <Cover />
            <Categories />
            <NewProducts />
            <NewsLettter />
        </div>
    );
};

export default Home;
