// Signup.jsx
import React, { useState } from "react";
import "../../../styles/Admin/Signup/index.css";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    // Minimum 6 characters, at least 1 uppercase, 1 lowercase, 1 number
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required");
      setSuccess("");
      return;
    }

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      setSuccess("");
      return;
    }

    if (!validatePassword(formData.password)) {
      setError(
        "Password must be at least 6 characters long, contain uppercase, lowercase and a number"
      );
      setSuccess("");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setSuccess("");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/admin-signup", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        alert("Admin registered successfully!");
      }

    } catch (err) {
      alert(err.response.data.message);
    }

    setError("");

    console.log("Admin Signup Data:", formData);

  };

  return (
    <div className="signup">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Admin Signup</h2>

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

        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
