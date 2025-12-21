// Login.jsx
import React, { use, useState } from "react";
import "../../../styles/Admin/Login/index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      setSuccess("");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      setSuccess("");
      return;
    }


    try {
      const response = await axios.post("http://localhost:5000/admin-login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        localStorage.setItem("adminToken", response.data.token);
        navigate("/admin-dashboard/orders")
      }

      console.log(response);
    } catch (err) {
      alert(err.response.data.message);
    }

    setError("");

    // TODO: Call backend API to authenticate admin
  };

  return (
    <div className="login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Admin Login</h2>

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
