import '../style/HomePage.css';
import { Link } from 'react-router-dom';
const HomePage = () => {

    return (
        <div className="home-container">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Welcome to Our Store</h1>
                    <p>Discover top-quality products at unbeatable prices. Shop smart, live better.</p>
                    <button className="hero-btn"><Link to="/product" style={{
                        textDecoration: 'none'
                    }}>Shop Now</Link></button>
                </div>
            </section>
            
            <section className="categories-section">
                <h2 className="categories-title">Shop by Category</h2>
                <div className="categories-grid">
                    <div className="category-card">
                        <img src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg" alt="Men's Clothing" className="category-image" />
                        <h3>Men's Clothing</h3>
                        <Link to={`/category/${encodeURIComponent("men's clothing")}`} className="view-btn">View</Link>
                    </div>
                    <div className="category-card">
                        <img src="https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg" alt="Women's Clothing" className="category-image" />
                        <h3>Women's Clothing</h3>
                        <Link to={`/category/${encodeURIComponent("women's clothing")}`} className="view-btn">View</Link>
                    </div>
                    <div className="category-card">
                        <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" alt="Electronics" className="category-image" />
                        <h3>Electronics</h3>
                        <Link to={`/category/${encodeURIComponent("electronics")}`} className="view-btn">View</Link>
                    </div>
                    <div className="category-card">
                        <img src="https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg" alt="Jewelery" className="category-image" />
                        <h3>Jewelery</h3>
                        <Link to={`/category/${encodeURIComponent("jewelery")}`} className="view-btn">View</Link>
                    </div>
                </div>
            </section>

            <section className="features-section">
                <h2>Why Choose Us?</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <span className="feature-icon">🚚</span>
                        <h3>Fast Delivery</h3>
                        <p>Get your products delivered quickly and safely.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">💰</span>
                        <h3>Great Prices</h3>
                        <p>Affordable pricing with regular deals and discounts.</p>
                    </div>
                    <div className="feature-card">
                        <span className="feature-icon">⭐</span>
                        <h3>Top Quality</h3>
                        <p>Only the best products, hand-picked for you.</p>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default HomePage;