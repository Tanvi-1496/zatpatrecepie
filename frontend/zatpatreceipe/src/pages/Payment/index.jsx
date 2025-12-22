import React, { useState } from "react";
import "../../styles/Payment/index.css";
import QR from "../../assets/Payment/qr.png";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import Loader from "../../components/Loader";

const Payment = ({ setCartProducts }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const total = location.state?.total;
  const address = location.state?.address;
  const cart = location.state?.cart;

  const [txnId, setTxnId] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleConfirm = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!txnId.trim()) {
      setError("Transaction ID is required");
      return;
    }

    try {
      const filteredProducts = cart.map(
        ({ id, img, description, ...rest }) => rest
      );

      const token = localStorage.getItem("adminToken");

      const response = await axios.post(
        "http://localhost:5000/orders",
        {
          total,
          filteredProducts,
          address,
          transactionID: txnId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        setCartProducts([]);
        localStorage.setItem("cart", JSON.stringify([]));
        navigate("/completion");
      }

      console.log(response);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }

    setError("");
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="payment">
      <div className="payment-card">
        <h2 className="payment-title">Complete Payment</h2>

        <p className="payment-total">₹{total}</p>

        <p className="payment-subtitle">
          Scan the QR code & enter your transaction ID
        </p>

        <img src={QR} alt="QR Code" className="payment-qr" />

        <label className="payment-label">Transaction ID</label>
        <input
          type="text"
          placeholder="Eg. 8F3A2X9Q"
          className={`payment-input ${error ? "input-error" : ""}`}
          value={txnId}
          onChange={(e) => {
            setTxnId(e.target.value);
            if (error) setError("");
          }}
        />

        {error && <p className="payment-error">{error}</p>}

        <button className="payment-btn" onClick={handleConfirm}>
          Confirm Payment
        </button>

        <p className="payment-note">
          *Payment will be verified before order confirmation
        </p>
      </div>
    </section>
  );
};

export default Payment;
