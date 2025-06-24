import { useEffect, useState } from 'react';
import '../style/ProductPage.css';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';

const Categories = () => {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const category = decodeURIComponent(categoryName);

    const get_data_from_server = () => {
        setLoading(true);
        axios.get("https://e-commerce-data-cbe9.onrender.com/product", {
            params: {
                category,
            },
        })
            .then((res) => {
                setProducts(res.data);
                setTimeout(() => {
                    setLoading(false);
                }, 2000);
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        get_data_from_server();
    }, [category]);

    return (
        <div style={{ background: "whitesmoke" }}>
            <h1 style={{ textAlign: "center", paddingTop: "50px", fontSize: "40px", color: "#FF8A00" }}>
                {category === "men's clothing" ? "Men's Clothing" : category === "women's clothing" ? "Women's Clothing" : 
                    category === "electronics" ? "Electronics" : "Jewelery"}
            </h1>

            {loading ? (
                <div style={{ height: '50vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <LoadingIndicator />
                </div>
            ) : (
                <>
                    <div className="product-grid">
                        {products.map(product => (
                            <div className="product-card" key={product.id}>
                                <img src={product.image} alt={product.title} />
                                <h3 className="product-title">{product.title}</h3>
                                <p className="product-category">Category: {product.category}</p>
                                <p className="product-price">Price: ${product.price}</p>
                                <p className="product-rating">⭐ {product.rating.rate} ({product.rating.count})</p>
                                <Link to={`/description/${product.id}`}>
                                    <button className="view-product-btn">View Product Details</button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Categories;