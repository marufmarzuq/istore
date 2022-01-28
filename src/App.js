import "./App.css";
import CartSidebar from "./components/cartSidebar/CartSidebar";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import SingleProduct from "./pages/singleProduct/SingleProduct";

function App() {
    return (
        <div className="App">
            <SingleProduct />
            <CartSidebar />
        </div>
    );
}

export default App;
