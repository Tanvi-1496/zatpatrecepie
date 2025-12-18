import React, { useState } from "react";
import "../../styles/PersonalDetails/index.css";

const PersonalDetails = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!/^[6-9]\d{9}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    if (!form.address.trim())
      newErrors.address = "Address is required";

    if (!/^\d{6}$/.test(form.pincode))
      newErrors.pincode = "Enter a valid 6-digit pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", form);
      // proceed to payment / next step
    }
  };

  return (
    <section className="personal-details">
      <form className="personal-details_form" onSubmit={handleSubmit}>
        <h2 className="personal-details_formHeading">Delivery Details</h2>

        <div className="personal-details_formInputWrap">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="personal-details_formInputWrap">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <div className="personal-details_formInputWrap">
          <label>Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>

        <div className="personal-details_formInputWrap">
          <label>Pincode</label>
          <input
            type="text"
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
          />
          {errors.pincode && <span className="error">{errors.pincode}</span>}
        </div>

        <button className="personal-details_formBtn" type="submit">Proceed</button>
      </form>
    </section>
  );
};

export default PersonalDetails;
