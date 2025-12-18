import React, { useState } from "react";
import logo from "../../assets/Home/Nav/logo.png";
import "../../styles/Home/Nav/index.css";
import { IoFastFoodOutline } from "react-icons/io5";
import { GiHamburger } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Nav = ({ setCartOpen }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  mobileMenuOpen
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <nav className="navbar">
      <img src={logo} className="navbar_logo" />
      <div className="navlinks_container">
        <a href="/" className="navlinks">
          Home
        </a>
        <a href="about-us" className="navlinks">
          About us
        </a>
        <a href="#" className="navlinks">
          Contact us
        </a>
      </div>
      <div className="navbar_btns">
        <button className="navbar_cart">
          <IoFastFoodOutline onClick={() => setCartOpen(true)} />
        </button>
        <button className="navbar_menu" onClick={() => setMobileMenuOpen(true)}>
          <GiHamburger />
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="navbar_mobile-menu">
          <div className="navbar_mobile-header">
            <button
              className="navbar_mobile-close"
              onClick={() => setMobileMenuOpen(false)}
            >
              <RxCross1 />
            </button>
          </div>
          <div className="navbar_mobile-navlinks">
            <a href="/" className="navlinks-mobile">
              Home
            </a>
            <a href="about-us" className="navlinks-mobile">
              About us
            </a>
            <a href="#" className="navlinks-mobile">
              Contact us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Nav;
