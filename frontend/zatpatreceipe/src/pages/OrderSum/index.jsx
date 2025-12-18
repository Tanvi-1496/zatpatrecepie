import React from "react";
import "../../styles/OrderSum/index.css";
import { useLocation, useNavigate } from "react-router-dom";

const OrderSum = ({ cart }) => {
  const location = useLocation();

  const address = location.state.address;

  const navigate = useNavigate()

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const deliveryCharge = subtotal > 500 ? 0 : 50;
  const totalAmount = subtotal + deliveryCharge;

  const selectedAddress = address; // assuming first address is selected

  return (
    <section className="order-summary">
      <h2 className="order-title">Order Summary</h2>

      {/* Address Section */}
      <div className="order-card">
        <h3>Delivery Address</h3>
        <p className="order-name">{selectedAddress.name}</p>
        <p className="order-phone">{selectedAddress.phone}</p>
        <p className="order-add">{selectedAddress.address}</p>
        <p className="order-pin">Pincode: {selectedAddress.pincode}</p>
      </div>

      {/* Cart Items */}
      <div className="order-card">
        <h3>Items</h3>

        {cart.map((item) => (
          <div key={`${item.id}-${item.weight}`} className="order-item">
            <img src={item.img} alt={item.title} />

            <div className="order-item-details">
              <p className="item-title">
                {item.title} <span className="item-weight">{` (${item.weight}g)`}</span>
              </p>
              <p className="item-qty">Qty: {item.quantity}</p>
            </div>

            <p className="item-price">₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>

      {/* Price Summary */}
      <div className="order-card">
        <h3>Price Details</h3>

        <div className="price-row">
          <span>Subtotal</span>
          <span>₹{subtotal}</span>
        </div>

        <div className="price-row">
          <span>Delivery Charges</span>
          <span>{deliveryCharge === 0 ? "FREE" : `₹${deliveryCharge}`}</span>
        </div>

        <div className="price-row total">
          <span>Total</span>
          <span>₹{totalAmount}</span>
        </div>

        <button className="place-order-btn" onClick={() => navigate("/payment", {
          state: {
            total : totalAmount
          }
        })}  >Place Order</button>
      </div>
    </section>
  );
};

export default OrderSum;
