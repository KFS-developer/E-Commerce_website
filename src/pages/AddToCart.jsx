import { useEffect, useState } from 'react';
import '../style/AddToCart.css';
import axios from 'axios';

const AddToCart = () => {
  const [products, setProducts] = useState([])

  const get_data_from_server = () => {
    axios.get('https://e-commerce-data-cbe9.onrender.com/add-to-cart')
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRemove = (id) => {
    axios.delete(`https://e-commerce-data-cbe9.onrender.com/add-to-cart/${id}`)
      .then(() => {
        get_data_from_server();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleUpdateQty = async (id, BtnType) => {
    try {
      const { data } = await axios.get(`https://e-commerce-data-cbe9.onrender.com/add-to-cart/${id}`);
      const updatedQty = BtnType === 'INCREMENT' ? data.quantity + 1 : data.quantity - 1;

      await axios.patch(`https://e-commerce-data-cbe9.onrender.com/add-to-cart/${id}`, { quantity: updatedQty });
      get_data_from_server();
    } catch (error) {
      console.log(error);
    }
  };

  let totalPrice = 0;
  products.forEach((el) => (totalPrice += el.price * el.quantity))

  useEffect(() => {
    get_data_from_server();
  }, []);

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <div className="cart-items">
        {products.map(product => (
          <div key={product.id} className="cart-item">
            <img src={product.image} alt={product.title} className="cart-item-image" />

            <div className="cart-item-details">
              <h2 className="cart-item-title">{product.title}</h2>
              <p className="cart-item-price">${product.price.toFixed(2)}</p>

              <div className="cart-item-quantity-control">
                <button className="quantity-btn" disabled={product.quantity == 1} onClick={() => handleUpdateQty(product.id, "DECREMENT")}>-</button>
                <span className="quantity-value">{product.quantity}</span>
                <button className="quantity-btn" onClick={() => handleUpdateQty(product.id, "INCREMENT")}>+</button>
              </div>

              <button className="remove-btn" onClick={() => handleRemove(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default AddToCart;
