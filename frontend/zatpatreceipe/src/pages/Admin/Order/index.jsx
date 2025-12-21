import React, { useState, useEffect } from "react";
import "../../../styles/Admin/Order/index.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const Order = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(data?.status || "pending");

  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5000/get-order/" + id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success) {
          setData(res.order);
          setStatus(res.order.status);
        }
      });
  }, []);

  const handleStatus = async (status) => {
    console.log(data);

    try {
      const orderId = data.id;
      const token = localStorage.getItem("adminToken");

      const response = await axios.post(
        "http://localhost:5000/update-status",
        {
          status,
          orderId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.success) {
        if (status === "baking") {
          setStatus("baking");
        } else if (status === "sent_for_delivery") {
          setStatus("sent_for_delivery");
          setShowConfirm(false);
        }
      }

      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };


  const triggerDelivery = () => {
    setShowConfirm(true);
  };

 
  return (
    <div className="order-details-page">
      <h2>Order Details</h2>

      {/* Order Info */}
      <div className="card">
        <h3>Customer Information</h3>
        <p>
          <strong>Order ID:</strong> {data?.id}
        </p>
        <p>
          <strong>Name:</strong> {data?.cust_name}
        </p>
        <p>
          <strong>Phone:</strong> {data?.number}
        </p>
        <p>
          <strong>Address:</strong> {data?.address}
        </p>
        <p>
          <strong>Pincode:</strong> {data?.pincode}
        </p>
        <p>
          <strong>Order Date:</strong>{" "}
          {new Date(data?.created_at).toLocaleString()}
        </p>
      </div>

      {/* Status Section */}
      <div className="card">
        <h3>Order Status</h3>

        <div className={`status-badge ${status}`}>
          {status.replaceAll("_", " ").toUpperCase()}
        </div>

        <div className="actions">
          {status !== "baking" && status !== "sent_for_delivery" && (
            <button
              className="baking-btn"
              onClick={() => handleStatus("baking")}
            >
              Mark as Baking
            </button>
          )}

          {status !== "sent_for_delivery" && (
            <button className="delivery-btn" onClick={triggerDelivery}>
              Send for Delivery
            </button>
          )}
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Confirm Delivery</h3>
            <p>
              This action will send the order for delivery and trigger shipment.
              Are you sure?
            </p>

            <div className="modal-actions">
              <button
                className="confirm-btn"
                onClick={() => handleStatus("sent_for_delivery")}
              >
                Yes, Proceed
              </button>
              <button
                className="cancel-btn"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
