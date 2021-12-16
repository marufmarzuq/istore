import "./Home.css";
import Header from "../../components/header/Header";
import Cover from "../../components/cover/Cover";
import Categories from "../../components/categories/Categories";

const Home = () => {
    return (
        <div className="home">
            <Header />
            <Cover />
            <Categories />
        </div>
    );
};

export default Home;
