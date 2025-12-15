import React, { useEffect, useState } from "react";
import "../../styles/Cart/index.css";
import { MdDelete } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa"; // Header icon
import { BsMinecart } from "react-icons/bs"; // Empty cart icon
import { calcPriceAccToWeight } from "../../sections/Home/Exploremore";

const Cart = ({ cartProducts, setCartOpen, setCartProducts }) => {
  const increQuan = (id, weight) => {
    setCartProducts((prev) =>
      prev.map((prod) =>
        prod.id === id && prod.weight === weight
          ? { ...prod, quantity: prod.quantity + 1 }
          : prod
      )
    );
  };

  const decreQuan = (id, weight) => {
    setCartProducts((prev) =>
      prev.map((prod) =>
        prod.id === id && prod.weight === weight
          ? {
              ...prod,
              quantity:
                prod.quantity <= 1
                  ? deleteProd(id, prod.weight)
                  : prod.quantity - 1,
            }
          : prod
      )
    );
  };

  const deleteProd = (id, weight) => {
    setCartProducts((prev) =>
      prev.filter((p) => !(p.id === id && p.weight === weight))
    );
  };

  const subtotal = cartProducts.reduce(
    (total, p) => total + p.price * calcPriceAccToWeight(p.weight) * p.quantity,
    0
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
  }, [cartProducts]);

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
                <h3 className="cart_item_title">
                  {card.title}{" "}
                  <span>{`(${
                    card.weight > 1 ? card.weight + "gm" : card.weight + "kg"
                  })`}</span>
                </h3>
                <p className="cart_item_desc">{card.description}</p>

                <div className="cart_item_quantity">
                  <button
                    className="quantity_btn minus"
                    onClick={() => decreQuan(card.id, card.weight)}
                  >
                    -
                  </button>

                  <span className="quantity_value">{card.quantity}</span>

                  <button
                    className="quantity_btn plus"
                    onClick={() => increQuan(card.id, card.weight)}
                  >
                    +
                  </button>

                  <button
                    className="quantity_btn plus"
                    onClick={() => deleteProd(card.id, card.weight)}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>

              <div className="cart_item_price">
                ₹
                {card.price * calcPriceAccToWeight(card.weight) * card.quantity}
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
