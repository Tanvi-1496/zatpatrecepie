import React, { useEffect, useState } from "react";
import "../../styles/PersonalDetails/index.css";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const PersonalDetails = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    pincode: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [formVisible, setFormVisible] = useState(false);

  const [address, setAddress] = useState(() => {
    const stored = localStorage.getItem("address");
    return stored ? JSON.parse(stored) : [];
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!/^[6-9]\d{9}$/.test(form.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    if (!form.address.trim()) newErrors.address = "Address is required";

    if (!/^\d{6}$/.test(form.pincode))
      newErrors.pincode = "Enter a valid 6-digit pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    localStorage.setItem("address", JSON.stringify(address));
  }, [address]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setAddress([...address, form]);

      navigate("/order-summary", {
        state: { address: form },
      });
    }
  };

  const handleDelAdd = (index) => {
    setAddress((prev) => prev.filter((p, i) => i !== index));

    setForm({
      name: "",
      phone: "",
      address: "",
      pincode: "",
    });
  };

  return (
    <section className="personal-details">
      <h2 className="personal-details_heading">Select an address</h2>

      {address.length > 0 && formVisible === false && (
        <ul className="personal-details_existingAddress">
          {address.map((add, index) => (
            <li
              key={index}
              className="personal-details_existingAddress-list"
              onClick={() =>
                navigate("/order-summary", {
                  state: { address: add },
                })
              }
            >
              <div className="address-header">
                <h4 className="address-name">{add.name}</h4>
                <button
                  className="address-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setFormVisible(true);
                    setForm({
                      name: add.name,
                      phone: add.phone,
                      address: add.address,
                      pincode: add.pincode,
                    });
                  }}
                >
                  <CiEdit />
                </button>
              </div>
              <span className="address-phone">{add.phone}</span>
              <p className="address-text">{add.address}</p>

              <div className="address-pincodeDelete">
                <p className="address-pincode">
                  Pincode: <span>{add.pincode}</span>
                </p>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelAdd(index);
                  }}
                >
                  <MdDelete />
                </button>
              </div>
            </li>
          ))}

          {address.length < 3 && (
            <>
              <button
                className="address-new"
                onClick={() => setFormVisible(true)}
              >
                Add adddress
              </button>
              <p className="address-note">*you can add upto 3 addresses</p>
            </>
          )}
        </ul>
      )}

      {(address.length === 0 || formVisible === true) && (
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

          <button className="personal-details_formBtn" type="submit">
            Proceed
          </button>
        </form>
      )}
    </section>
  );
};

export default PersonalDetails;
