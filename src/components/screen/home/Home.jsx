import Categories from "../../ui/categories/Categories";
import Cover from "../../ui/cover/Cover";
import NewProducts from "../../ui/newProducts/NewProducts";
import NewsLettter from "../../ui/newsLetter/NewsLettter";
import "./Home.css";

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
