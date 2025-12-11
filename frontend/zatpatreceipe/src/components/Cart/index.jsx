import React, { useState } from "react";
import "../../styles/Cart/index.css";
import { MdDelete } from "react-icons/md";

const Cart = ({ cartProducts, setCartOpen ,setCartProducts }) => {
  // Local quantity state for each product
  const [quantities, setQuantities] = useState(
    cartProducts.reduce((acc, product) => {
      acc[product.id] = 1; // default quantity = 1
      return acc;
    }, {})
  );

  // Increase Quantity
  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  // Decrease Quantity
  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

const deleteItem = (id) => {
  setCartProducts((products) => products.filter((p) => p.id !== id));
};

  return (
    <div className="cart_container">
      {cartProducts.map((card) => (
        <div className="cart_item_box" key={card.id}>
          <div className="cart_item_content">
            {/* IMAGE */}
            <img src={card.img} alt={card.title} className="cart_item_img" />

            {/* TEXT DETAILS */}
            <div className="cart_item_text">
              <h3 className="cart_item_title">{card.title}</h3>
              <p className="cart_item_desc">{card.description}</p>

              {/* QUANTITY CONTROLS */}
              <div className="cart_item_quantity">
                <button
                  className="quantity_btn minus"
                  onClick={() => decreaseQty(card.id)}
                >
                  -
                </button>

                <span className="quantity_value">{quantities[card.id]}</span>

                <button
                  className="quantity_btn plus"
                  onClick={() => increaseQty(card.id)}
                >
                  +
                </button>
                <button className="quantity_btn plus" onClick={() => deleteItem(card.id)}>
                  <MdDelete />
                </button>
              </div>
            </div>

            {/* PRICE */}
            <div className="cart_item_price">
              ₹{card.price * quantities[card.id]}
            </div>
          </div>
        </div>
      ))}

      {/* Close Button */}
      <button className="close_cart" onClick={() => setCartOpen(false)}>
        ✕
      </button>
    </div>
  );
};

export default Cart;
