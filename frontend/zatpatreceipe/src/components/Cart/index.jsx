import React, { useState } from "react";
import "../../styles/Cart/index.css";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa"; // Header icon
import { BsMinecart } from "react-icons/bs"; // Empty cart icon

const Cart = ({ cartProducts, setCartOpen, setCartProducts }) => {
  const [quantities, setQuantities] = useState(
    cartProducts.reduce((acc, product) => {
      acc[product.id] = 1;
      return acc;
    }, {})
  );

  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: prev[id] > 1 ? prev[id] - 1 : 1,
    }));
  };

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item?")) {
      setCartProducts((products) => products.filter((p) => p.id !== id));
    }
  };

  const subtotal = cartProducts.reduce(
    (total, p) => total + p.price * quantities[p.id],
    0
  );

  return (
    <div className="cart_container">
      {/* ------------------- HEADER ------------------- */}
      <div className="cart_header">
        <FaShoppingCart className="cart_header_icon" />
        <h2 className="cart_header_title">Your Cart</h2>

        <button className="close_cart" onClick={() => setCartOpen(false)}>
          ✕
        </button>
      </div>

      {/* ------------------- EMPTY CART STATE ------------------- */}
      {cartProducts.length === 0 && (
        <div className="cart_empty_state">
          <BsMinecart className="cart_empty_icon bounce" />
          <p className="bounce_text">Your cart is empty</p>
        </div>
      )}

      {/* ------------------- CART ITEMS ------------------- */}
      {cartProducts.length > 0 &&
        cartProducts.map((card) => (
          <div className="cart_item_box" key={card.id}>
            <div className="cart_item_content">
              <img src={card.img} alt={card.title} className="cart_item_img" />

              <div className="cart_item_text">
                <h3 className="cart_item_title">{card.title}</h3>
                <p className="cart_item_desc">{card.description}</p>

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

                  <button
                    className="quantity_btn plus"
                    onClick={() => deleteItem(card.id)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>

              <div className="cart_item_price">
                ₹{card.price * quantities[card.id]}
              </div>
            </div>
          </div>
        ))}

      {/* ------------------- FOOTER ------------------- */}
      {cartProducts.length > 0 && (
        <div className="cart_footer">
          <div className="cart_footer_inner">
            <div className="cart_footer_price_row">
              <span>Total</span>
              <span>₹{subtotal}</span>
            </div>

            <button className="cart_footer_btn">Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
