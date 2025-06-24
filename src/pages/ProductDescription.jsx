import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDescription = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const get_data_from_server = () => {
    setLoading(true);
    axios
      .get(`https://e-commerce-data-cbe9.onrender.com/product/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const handleCart = async () => {
    try {
      const { data } = await axios.get("https://e-commerce-data-cbe9.onrender.com/add-to-cart");
      const cardData = data.find((el) => el.id === Number(id));

      if (!cardData) {
        await axios.post("https://e-commerce-data-cbe9.onrender.com/add-to-cart", { ...product, quantity: 1 });
        alert("Product added to cart!");
      } else {
        alert("Product already in cart!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    get_data_from_server();
  }, [id]);

  if (loading) return <div>Loading...</div>;

  return (
    <>
      <style>
        {`
          .product-container {
              display: flex;
              flex-wrap: wrap;
              padding: 2rem;
              gap: 2rem;
              justify-content: center;
              align-items: center;
          }

          .product-image img {
              width: 350px;
              height: auto;
              object-fit: contain;
              border-radius: 8px;
              background-color: #f8f8f8;
              padding: 1rem;
          }

          .product-details {
              max-width: 500px;
          }

          .product-title {
              font-size: 2rem;
              margin-bottom: 1rem;
          }

          .product-category {
              font-size: 1.1rem;
              color: #888;
              margin-bottom: 0.5rem;
          }

          .product-price {
              font-size: 1.5rem;
              color: #FF8A00;
              margin-bottom: 1rem;
          }

          .product-description {
              font-size: 1.1rem;
              color: #555;
              margin-bottom: 1.5rem;
          }

          .product-rating {
              font-size: 1.2rem;
              margin-bottom: 2rem;
          }

          .add-to-cart-btn {
              padding: 10px 20px;
              font-size: 18px;
              background-color: #FF8A00;
              color: white;
              border: none;
              border-radius: 5px;
              cursor: pointer;
          }
        `}
      </style>

      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-details">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-category">Category: {product.category}</p>
          <p className="product-price">${product.price}</p>
          <p className="product-description">{product.description}</p>
          <p className="product-rating">
            Rating: {product?.rating?.rate} ⭐ ({product?.rating?.count} reviews)
          </p>
          <button className="add-to-cart-btn" onClick={handleCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductDescription;