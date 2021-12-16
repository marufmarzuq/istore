import "./Categories.css";

const Categories = () => {
    return (
        <section className="categories">
            <div className="container">
                <div className="categories-container">
                    <div className="category-box c-style1">
                        <img
                            src="https://image.freepik.com/free-photo/excited-white-girl-bright-stylish-glasses-posing-pink-dreamy-curly-woman-playing-with-her-ginger-hair-laughing_197531-11045.jpg"
                            alt=""
                        />
                        <div className="box-overlay"></div>
                        <div className="category-info">
                            <h1 className="big-text">18</h1>
                            <h2 className="category-title">New Arrivals</h2>
                        </div>
                    </div>
                    <div className="category-box c-style2">
                        <img
                            src="https://img.freepik.com/free-photo/stylish-young-women-posing-neon-light_136403-1112.jpg?size=626&ext=jpg&ga=GA1.2.1163962682.1634570051"
                            alt=""
                        />
                        <div className="box-overlay"></div>
                        <div className="category-info">
                            <h1>Collection</h1>
                            <h2>Women</h2>
                            <button className="category-btn">Shop Now</button>
                        </div>
                    </div>
                    <div className="category-box c-style2">
                        <img
                            src="https://img.freepik.com/free-photo/handsome-bearded-hipster-man-wearing-round-sunglasses-isolated-blue-light-space_264277-229.jpg?size=626&ext=jpg&ga=GA1.2.1163962682.1634570051"
                            alt=""
                        />
                        <div className="box-overlay"></div>
                        <div className="category-info">
                            <h1>Collection</h1>
                            <h2>Men</h2>
                            <button className="category-btn">Shop Now</button>
                        </div>
                    </div>
                    <div className="category-box c-style3">
                        <img
                            src="https://cdn.shopify.com/s/files/1/0049/2856/9434/files/banner-03_1024x.jpg?v=1551774235"
                            alt=""
                        />
                        <div className="box-overlay"></div>
                        <div className="category-info">
                            <h1>sale</h1>
                            <h2>Up to 40% off</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
