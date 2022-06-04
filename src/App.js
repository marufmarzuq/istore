import { useState, useEffect } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import CartSidebar from "./components/cartSidebar/CartSidebar";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import SingleProduct from "./pages/singleProduct/SingleProduct";
import { Routes, Route } from "react-router-dom";

function App() {
  const [darkTheme, setDarkTheme] = useState();

  useEffect(() => {
    if (localStorage.getItem("darkTheme") !== null) {
      setDarkTheme(JSON.parse(localStorage.getItem("darkTheme")));
    } else {
      setDarkTheme(false);
    }
  }, []);
  console.log(darkTheme);
  const handleTheme = () => {
    console.log(darkTheme);
    setDarkTheme(!darkTheme);
    localStorage.setItem("darkTheme", !darkTheme);
  };
  console.log(darkTheme);
  return (
    <Provider store={store}>
      <div className="App">
        <Header handleTheme={handleTheme} darkTheme={darkTheme} />
        <CartSidebar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/products/:dfsd" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
