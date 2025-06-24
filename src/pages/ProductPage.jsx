import { useEffect, useState } from 'react';
import '../style/ProductPage.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../components/LoadingIndicator';

const ProductPage = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState(null);
    const [search, setSearch] = useState("");
    const [price, setprice] = useState(null);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const get_data_from_server = () => {
        setLoading(true);
        axios.get("https://e-commerce-data-cbe9.onrender.com/product", {
            params: {
                category,
                q: search,
                _sort: price ? "price" : undefined,
                _order: price === "low-to-high" ? "asc" : "desc",
                _limit: 10,
                _page: page
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
    }, [category, search, price, page]);

    return (
        <div style={{ background: "whitesmoke" }}>
            <h1 style={{ textAlign: "center", paddingTop: "50px", fontSize: "40px", color: "#FF8A00" }}>
                All Our Products
            </h1>

            <div className="filter-section" style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px", flexWrap: "wrap" }}>
                <select className="filter-dropdown" onChange={(e) => setCategory(e.target.value)} >
                    <option value="">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="jewelery">Jewelery</option>
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                </select>

                <input
                    type="text"
                    className="search-box"
                    placeholder="Search by title..."
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: "8px", borderRadius: "6px", border: "1px solid #ccc" }}
                />

                <select className="sort-dropdown" onChange={(e) => setprice(e.target.value)}>
                    <option value="">Sort by Price:</option>
                    <option value="low-to-high">Low to High</option>
                    <option value="high-to-low">High to Low</option>
                </select>
            </div>

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

                    <div className="pagination" style={{ display: "flex", justifyContent: "center", padding: "30px", gap: "10px" }}>
                        <button className="pagination-btn" disabled={page === 1} onClick={() => setPage(page - 1)}>Previous</button>
                        <button className="pagination-btn">{page}</button>
                        <button className="pagination-btn" disabled={page === 2} onClick={() => setPage(page + 1)}>Next</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductPage;
